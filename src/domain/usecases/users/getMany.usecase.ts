import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { InternalException } from 'src/domain/exceptions/internal.exception';

@Injectable()
export class GetManyUsersUsecase {
  constructor(private readonly entity: UserEntity) {}

  async execute(filters?: Record<string, string>) {
    try {
      const users = await this.entity.getMany(filters);

      return users.map((user) => {
        delete user.password;
        return user;
      });
    } catch (error) {
      throw new InternalException(null, null, error);
    }
  }
}
