import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { Exception } from './exception';

@Catch(Exception)
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: Exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const exceptionResponse = exception.handle();

    response.status(exceptionResponse.statusCode).json({
      ...exceptionResponse,
      path: request.url,
    });
  }
}
