/**
 * 用户接口
 */
export interface User {
  /** 用户唯一标识 */
  id: string;
  /** 用户名 */
  username: string;
  /** 电子邮箱 */
  email: string;
  /** 显示名称 */
  displayName?: string;
  /** 头像 URL */
  avatar?: string;
  /** 用户角色 */
  role: UserRole;
  /** 账户状态 */
  status: UserStatus;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
  /** 最后登录时间 */
  lastLoginAt?: string;
  /** 用户偏好设置 */
  preferences?: UserPreferences;
}

/**
 * 用户角色
 */
export type UserRole = 'admin' | 'user' | 'guest';

/**
 * 用户状态
 */
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'deleted';

/**
 * 用户偏好设置
 */
export interface UserPreferences {
  /** 语言偏好 */
  locale?: string;
  /** 主题偏好 */
  theme?: 'light' | 'dark' | 'auto';
  /** 时区 */
  timezone?: string;
  /** 通知设置 */
  notifications?: NotificationSettings;
  /** 自定义设置 */
  custom?: Record<string, any>;
}

/**
 * 通知设置
 */
export interface NotificationSettings {
  /** 是否启用邮件通知 */
  emailEnabled?: boolean;
  /** 是否启用推送通知 */
  pushEnabled?: boolean;
  /** 通知类型 */
  types?: NotificationType[];
}

/**
 * 通知类型
 */
export type NotificationType = 'update' | 'promotion' | 'reminder' | 'alert';

/**
 * 用户订阅
 */
export interface UserSubscription {
  /** 订阅唯一标识 */
  id: string;
  /** 用户 ID */
  userId: string;
  /** 订阅类型 */
  type: SubscriptionType;
  /** 订阅状态 */
  status: SubscriptionStatus;
  /** 订阅开始时间 */
  startedAt: string;
  /** 订阅结束时间 */
  endsAt?: string;
  /** 自动续费 */
  autoRenew?: boolean;
  /** 订阅计划 */
  plan: SubscriptionPlan;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
}

/**
 * 订阅类型
 */
export type SubscriptionType = 'free' | 'premium' | 'enterprise';

/**
 * 订阅状态
 */
export type SubscriptionStatus = 'active' | 'expired' | 'cancelled' | 'pending';

/**
 * 订阅计划
 */
export interface SubscriptionPlan {
  /** 计划 ID */
  id: string;
  /** 计划名称 */
  name: string;
  /** 计划描述 */
  description?: string;
  /** 价格（单位：分） */
  price: number;
  /** 货币代码 */
  currency: string;
  /** 计费周期 */
  billingCycle: BillingCycle;
  /** 功能列表 */
  features: SubscriptionFeature[];
  /** 限制 */
  limits?: SubscriptionLimits;
}

/**
 * 计费周期
 */
export type BillingCycle = 'monthly' | 'yearly' | 'lifetime';

/**
 * 订阅功能
 */
export interface SubscriptionFeature {
  /** 功能名称 */
  name: string;
  /** 功能描述 */
  description?: string;
  /** 是否包含 */
  included: boolean;
  /** 限制数量 */
  limit?: number;
}

/**
 * 订阅限制
 */
export interface SubscriptionLimits {
  /** 最大计算器数量 */
  maxCalculators?: number;
  /** 每月最大 API 调用次数 */
  maxApiCalls?: number;
  /** 最大存储空间（MB） */
  maxStorage?: number;
  /** 是否支持自定义域名 */
  customDomain?: boolean;
  /** 是否支持高级功能 */
  advancedFeatures?: boolean;
}
