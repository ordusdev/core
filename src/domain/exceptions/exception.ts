export const ExceptionCodes = {
  alreadyExists: {
    message: 'Already exists an entity for given params',
    statusCode: 409,
    internalCode: 1000,
  },
  notFound: {
    message: 'Not found any entity for given params',
    statusCode: 404,
    internalCode: 1001,
  },
  badRequest: {
    message: 'Invalid data',
    statusCode: 400,
    internalCode: 1002,
  },
  internalServerError: {
    message: 'Internal server error',
    statusCode: 500,
    internalCode: 1003,
  },
  unauthorized: {
    message: 'Unauthorized request',
    statusCode: 401,
    internalCode: 1004,
  },
  forbidden: {
    message: 'Forbidden request',
    statusCode: 403,
    internalCode: 1005,
  },
};

export type ExceptionProps = {
  message: string;
  statusCode: number;
  internalCode: number;
  details?: string;
  originalError?: Error;
  params?: string | string[];
};

export class Exception {
  protected timestamp: string = new Date().toISOString();
  protected message: string;
  protected statusCode: number;
  protected internalCode: number;
  protected details?: string;
  protected originalError?: Error;
  protected params?: string | string[];

  constructor(exception: ExceptionProps) {
    Object.assign(this, exception);
  }

  getMessage() {
    return this.message;
  }

  log() {
    console.log(this);
  }

  throw() {
    throw this;
  }

  returns() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      details: this.details,
      params: this.params,
      timestamp: this.timestamp,
    };
  }

  handle() {
    this.log();
    return this.returns();
  }
}
