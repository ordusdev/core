import { Exception, ExceptionCodes } from './exception';

export class BadRequestException extends Exception {
  constructor(
    params?: string | string[],
    details?: string,
    originalError?: Error,
  ) {
    super({
      message: ExceptionCodes.badRequest.message,
      statusCode: ExceptionCodes.badRequest.statusCode,
      internalCode: ExceptionCodes.badRequest.internalCode,
      params,
      details,
      originalError,
    });
  }
}
