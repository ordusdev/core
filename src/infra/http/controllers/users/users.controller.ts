import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateOneUserUsecase } from 'src/domain/usecases/users';
import { UserModel } from 'src/domain/models/user.model';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(CreateOneUserUsecase.name)
    private readonly createOneUserUsecase: CreateOneUserUsecase,
  ) {}

  @Post()
  async createOne(@Body() data: Omit<UserModel, 'id'>) {
    return this.createOneUserUsecase.execute(data);
  }
}
