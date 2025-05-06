import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserModel } from 'src/domain/models/user.model';
import { AlreadyExistsException } from 'src/domain/exceptions/alreadyExists.exception';
import { InternalException } from 'src/domain/exceptions/internal.exception';
import { HashUtil } from 'src/domain/utils/hash.util';
import { VerifyUsernameUserUsecase } from './verifyUsername.usecase';

@Injectable()
export class CreateOneUserUsecase {
  constructor(
    private readonly entity: UserEntity,
    @Inject(VerifyUsernameUserUsecase.name)
    private readonly verifyUsernameUsecase: VerifyUsernameUserUsecase,
  ) {}

  async execute(data: Omit<UserModel, 'id'>) {
    try {
      const [alreadyExistsEmail, { available: isUsernameAvailable }] =
        await Promise.all([
          this.entity.getOneByEmail(data.email),
          this.verifyUsernameUsecase.execute(data.username),
        ]);

      if (alreadyExistsEmail || !isUsernameAvailable) {
        throw new AlreadyExistsException(
          [data.email, data.username],
          'CreateOneUserUsecase',
        );
      }

      data.password = HashUtil.encrypt(data.password);
      const user = await this.entity.createOne(data);
      delete user.password;
      return user;
    } catch (error) {
      if (error instanceof AlreadyExistsException) throw error;
      throw new InternalException(null, null, error);
    }
  }
}
