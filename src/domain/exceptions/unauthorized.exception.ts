import { Exception, ExceptionCodes } from './exception';

export class UnauthorizedException extends Exception {
  constructor(
    params?: string | string[],
    details?: string,
    originalError?: Error,
  ) {
    super({
      message: ExceptionCodes.unauthorized.message,
      statusCode: ExceptionCodes.unauthorized.statusCode,
      internalCode: ExceptionCodes.unauthorized.internalCode,
      params,
      details,
      originalError,
    });
  }
}
