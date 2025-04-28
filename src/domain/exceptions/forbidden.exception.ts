import { Exception, ExceptionCodes } from './exception';

export class ForbiddenException extends Exception {
  constructor(
    params?: string | string[],
    details?: string,
    originalError?: Error,
  ) {
    super({
      message: ExceptionCodes.forbidden.message,
      statusCode: ExceptionCodes.forbidden.statusCode,
      internalCode: ExceptionCodes.forbidden.internalCode,
      params,
      details,
      originalError,
    });
  }
}
