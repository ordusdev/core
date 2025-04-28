import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserModel } from 'src/domain/models/user.model';
import { DomainRepository } from 'src/domain/repositories/repository.interface';
import { USERS_REPOSITORY } from 'src/domain/repositories/users.repository.interface';
import { AlreadyExistsException } from 'src/domain/exceptions/alreadyExists.exception';
import { InternalException } from 'src/domain/exceptions/internal.exception';

@Injectable()
export class CreateOneUserUsecase {
  private entity: UserEntity;
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: DomainRepository<UserModel>,
  ) {
    this.entity = new UserEntity(this.usersRepository);
  }

  async execute(data: Omit<UserModel, 'id'>) {
    try {
      const [alreadyExistsEmail, alreadyExistsUsername] = await Promise.all([
        this.entity.getOneByEmail(data.email),
        this.entity.getOneByUsername(data.username),
      ]);

      if (alreadyExistsEmail || alreadyExistsUsername) {
        throw new AlreadyExistsException(
          [data.email, data.username],
          'CreateOneUserUsecase',
        );
      }

      // data.password = await this.entity.hashPassword(data.password);
      return this.entity.createOne(data);
    } catch (error) {
      if (error instanceof AlreadyExistsException) throw error;
      throw new InternalException(null, null, error);
    }
  }
}
