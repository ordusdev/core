import { Exception, ExceptionCodes } from './exception';

export class NotFoundException extends Exception {
  constructor(
    params?: string | string[],
    details?: string,
    originalError?: Error,
  ) {
    super({
      message: ExceptionCodes.notFound.message,
      statusCode: ExceptionCodes.notFound.statusCode,
      internalCode: ExceptionCodes.notFound.internalCode,
      params,
      details,
      originalError,
    });
  }
}
