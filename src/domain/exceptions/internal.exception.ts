import { Exception, ExceptionCodes } from './exception';

export class InternalException extends Exception {
  constructor(
    params?: string | string[],
    details?: string,
    originalError?: Error,
  ) {
    super({
      message: ExceptionCodes.internalServerError.message,
      statusCode: ExceptionCodes.internalServerError.statusCode,
      internalCode: ExceptionCodes.internalServerError.internalCode,
      params,
      details,
      originalError,
    });
  }
}
