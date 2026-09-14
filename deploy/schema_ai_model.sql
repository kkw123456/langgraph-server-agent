-- =============================================================================
-- 模型 + 服务商 精简版表结构（MySQL 8.0 / InnoDB / utf8mb4）
-- -----------------------------------------------------------------------------
-- ⚠️ 重要：这是**设计参考稿**。本项目运行时**不使用 MySQL**，实际数据层为 SQLite
--    （data/app.db），实现在 runtime_store.py 的 providers / models / model_call_log 表。
--    两者的字段映射：
--      ai_provider         ->  providers   (code/name/base_url/api_key/status)
--      ai_model            ->  models      (name/provider/provider_model/model_type/
--                                          status/context_length/description)
--      ai_model_call_log   ->  model_call_log (model/provider/user_id/prompt_tokens/
--                                          completion_tokens/total_tokens/cost/
--                                          success/cost_time)
--    若未来迁移到 MySQL，可直接用本文件建库再迁移数据。
-- -----------------------------------------------------------------------------
-- 设计目标：只保留核心表，去掉复杂扩展；
--          自有模型与第三方服务商模型统一用一张 ai_model 表管理。
-- 版本：精简版（不含计费单价字段，cost 仅作调用日志事实记录）
-- =============================================================================

SET NAMES utf8mb4;

-- -----------------------------------------------------------------------------
-- 1. 服务商表 ai_provider
--    第三方 AI 服务商（deepseek / zhipu / qwen / volc-ark ...）；
--    自有模型不需要服务商记录。
-- -----------------------------------------------------------------------------
CREATE TABLE `ai_provider` (
  `id`          bigint       NOT NULL AUTO_INCREMENT,
  `code`        varchar(64)  NOT NULL COMMENT '服务商编码 deepseek/zhipu/qwen',
  `name`        varchar(128) NOT NULL COMMENT '服务商名称',
  `base_url`    varchar(512) DEFAULT NULL COMMENT 'api地址（OpenAI 兼容接口根）',
  `api_key`     varchar(512) DEFAULT NULL COMMENT '密钥(加密存)',
  `status`      tinyint      NOT NULL DEFAULT 1 COMMENT '0禁用 1启用',
  `create_time` datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted`  tinyint      NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='AI服务商';

-- -----------------------------------------------------------------------------
-- 2. 模型表 ai_model（合并「模型 + 版本」，不单设版本表）
--    自有模型：provider_id = NULL、provider_model = NULL；
--    第三方模型：填 provider_id + provider_model（服务商侧真实模型名）。
-- -----------------------------------------------------------------------------
CREATE TABLE `ai_model` (
  `id`            bigint       NOT NULL AUTO_INCREMENT,
  `model_code`    varchar(64)  NOT NULL COMMENT '平台内部模型编码',
  `model_name`    varchar(128) NOT NULL COMMENT '模型名称',
  `provider_id`   bigint       DEFAULT NULL COMMENT '关联服务商id，自有模型为null',
  `provider_model`varchar(128) DEFAULT NULL COMMENT '服务商侧模型名 gpt-4o / qwen-turbo',
  `model_type`    tinyint      NOT NULL COMMENT '1LLM 2向量 3多模态',
  `status`        tinyint      NOT NULL DEFAULT 1 COMMENT '0下线 1上线',
  `context_length`int          DEFAULT NULL COMMENT '上下文窗口',
  `description`   varchar(500) DEFAULT NULL,
  `create_time`   datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time`   datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted`    tinyint      NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_model_code` (`model_code`),
  KEY `idx_provider_id` (`provider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='AI模型表';

-- -----------------------------------------------------------------------------
-- 3. 模型调用统计表 ai_model_call_log
--    只记事实：token 用量、费用、成败、耗时；不写请求/响应正文（避免膨胀）。
-- -----------------------------------------------------------------------------
CREATE TABLE `ai_model_call_log` (
  `id`                bigint      NOT NULL AUTO_INCREMENT,
  `model_id`          bigint      NOT NULL,
  `user_id`           varchar(64) DEFAULT NULL,
  `prompt_tokens`     int         DEFAULT 0,
  `completion_tokens` int         DEFAULT 0,
  `cost`              decimal(10,4) DEFAULT 0 COMMENT '消耗费用',
  `success`           tinyint     NOT NULL DEFAULT 0 COMMENT '0失败1成功',
  `cost_time`         int         DEFAULT 0 COMMENT '耗时ms',
  `create_time`       datetime    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_model_id` (`model_id`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='模型调用日志';

-- =============================================================================
-- 关系
--   ai_provider        1 : N  ai_model            （ai_model.provider_id）
--   ai_model           1 : N  ai_model_call_log   （ai_model_call_log.model_id）
--
-- 使用逻辑
--   自有模型   ：provider_id = NULL
--   第三方模型 ：provider_id + provider_model（服务商真实模型名）
--   调用       ：按 model_code 查到 ai_model →
--                join ai_provider 取 base_url / api_key / provider_model →
--                组装 OpenAI 兼容请求发出。
-- =============================================================================


-- =============================================================================
-- 示例数据（可选，便于联调；生产可删）
-- =============================================================================
INSERT INTO `ai_provider` (`code`, `name`, `base_url`, `api_key`, `status`) VALUES
  ('deepseek', 'DeepSeek',  'https://api.deepseek.com/v1',              'sk-xxx', 1),
  ('volc-ark', '火山方舟',   'https://ark.cn-beijing.volces.com/api/plan/v1', 'ark-xxx', 1);

INSERT INTO `ai_model`
  (`model_code`, `model_name`, `provider_id`, `provider_model`, `model_type`, `status`, `context_length`, `description`) VALUES
  -- 第三方模型（关联服务商）
  ('deepseek-chat',   'DeepSeek Chat',   1, 'deepseek-chat',   1, 1, 65536, 'DeepSeek 对话模型'),
  ('ark-code-latest', 'Ark Code Latest', 2, 'ark-code-latest', 1, 1, 32768, '火山方舟代码模型'),
  -- 自有模型（无服务商）
  ('local-embed-01',  '本地向量模型',     NULL, NULL,          2, 1,  8192, '自有 embedding 模型');


-- =============================================================================
-- 常用查询示例
-- =============================================================================

-- (1) 按 model_code 取「调用一个模型所需的全部信息」（核心用法）
--     拿到 base_url / api_key / provider_model 后即可发起 OpenAI 兼容请求。
SELECT m.id,
       m.model_code,
       m.model_name,
       m.model_type,
       m.provider_model,
       p.code       AS provider_code,
       p.base_url,
       p.api_key
FROM   ai_model m
LEFT JOIN ai_provider p ON p.id = m.provider_id AND p.is_deleted = 0
WHERE  m.model_code = 'deepseek-chat'
  AND  m.is_deleted = 0
  AND  m.status = 1;

-- (2) 列出某服务商下所有上线模型
SELECT m.model_code, m.model_name, m.provider_model, m.model_type, m.context_length
FROM   ai_model m
JOIN   ai_provider p ON p.id = m.provider_id
WHERE  p.code = 'deepseek'
  AND  m.status = 1 AND m.is_deleted = 0
ORDER BY m.id;

-- (3) 某模型近 7 天调用量 / 成功率 / 平均耗时 / 总费用
SELECT m.model_code,
       COUNT(*)                                              AS calls,
       SUM(l.success)                                        AS ok_calls,
       ROUND(SUM(l.success) / COUNT(*) * 100, 2)             AS success_rate,
       ROUND(AVG(l.cost_time), 1)                             AS avg_ms,
       SUM(l.prompt_tokens + l.completion_tokens)            AS total_tokens,
       ROUND(SUM(l.cost), 4)                                 AS total_cost
FROM   ai_model_call_log l
JOIN   ai_model m ON m.id = l.model_id
WHERE  l.create_time >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY m.model_code
ORDER BY calls DESC;

-- (4) 各服务商 token 消耗汇总（按服务商维度看成本）
SELECT p.name AS provider,
       SUM(l.prompt_tokens)     AS prompt_tokens,
       SUM(l.completion_tokens) AS completion_tokens,
       ROUND(SUM(l.cost), 4)    AS total_cost
FROM   ai_model_call_log l
JOIN   ai_model m    ON m.id = l.model_id
LEFT JOIN ai_provider p ON p.id = m.provider_id
GROUP BY p.id, p.name
ORDER BY total_cost DESC;

-- (5) 某用户今日调用明细
SELECT m.model_code, l.prompt_tokens, l.completion_tokens, l.cost,
       l.success, l.cost_time, l.create_time
FROM   ai_model_call_log l
JOIN   ai_model m ON m.id = l.model_id
WHERE  l.user_id = 'u_10001'
  AND  l.create_time >= CURDATE()
ORDER BY l.create_time DESC;

-- (6) 失败调用排查（最近 100 条失败）
SELECT l.id, m.model_code, l.user_id, l.cost_time, l.create_time
FROM   ai_model_call_log l
JOIN   ai_model m ON m.id = l.model_id
WHERE  l.success = 0
ORDER BY l.create_time DESC
LIMIT 100;
