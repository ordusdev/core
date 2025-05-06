export const LogLevelEnum = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const;
export type LogLevelEnum = (typeof LogLevelEnum)[keyof typeof LogLevelEnum];

export const LogTypeEnum = {
  AUTH: 'AUTH',
  CRUD: 'CRUD',
  NOTIFICATION: 'NOTIFICATION',
} as const;
export type LogTypeEnum = (typeof LogTypeEnum)[keyof typeof LogTypeEnum];
