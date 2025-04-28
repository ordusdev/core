import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateOneUserUsecase {
  constructor() {}
  async execute() {
    return 'Hello World!';
  }
}
