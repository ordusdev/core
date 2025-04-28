import { Exception, ExceptionCodes } from './exception';

export class AlreadyExistsException extends Exception {
  constructor(
    params?: string | string[],
    details?: string,
    originalError?: Error,
  ) {
    super({
      message: ExceptionCodes.alreadyExists.message,
      statusCode: ExceptionCodes.alreadyExists.statusCode,
      internalCode: ExceptionCodes.alreadyExists.internalCode,
      params,
      details,
      originalError,
    });
  }
}
