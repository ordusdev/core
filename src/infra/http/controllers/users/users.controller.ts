import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  CreateOneUserUsecase,
  GetManyUsersUsecase,
  VerifyUsernameUserUsecase,
} from 'src/domain/usecases/users';
import { UserModel } from 'src/domain/models/user.model';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(CreateOneUserUsecase.name)
    private readonly createOneUserUsecase: CreateOneUserUsecase,

    @Inject(VerifyUsernameUserUsecase.name)
    private readonly verifyUsernameUserUsecase: VerifyUsernameUserUsecase,

    @Inject(GetManyUsersUsecase.name)
    private readonly getManyUsersUsecase: GetManyUsersUsecase,
  ) {}

  @Post()
  async createOne(@Body() data: Omit<UserModel, 'id'>) {
    return this.createOneUserUsecase.execute(data);
  }

  @Post('username')
  async verifyUsername(@Body() data: Pick<UserModel, 'username'>) {
    return this.verifyUsernameUserUsecase.execute(data.username);
  }

  @Get()
  async getManyUsers() {
    return this.getManyUsersUsecase.execute();
  }
}
