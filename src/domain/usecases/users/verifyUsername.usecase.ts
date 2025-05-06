import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import { InternalException } from 'src/domain/exceptions/internal.exception';

const forbiddenUsernames = new Set([
  'admin',
  'root',
  'support',
  'user',
  'null',
  'undefined',
  'system',
  'moderator',
  'suporte',
  'adm',
  'ordus',
]);

@Injectable()
export class VerifyUsernameUserUsecase {
  constructor(private readonly entity: UserEntity) {}

  async execute(username: string) {
    try {
      const lowerUsername = username.toLocaleLowerCase();

      const isForbidden = forbiddenUsernames.has(lowerUsername);
      if (isForbidden) {
        return {
          available: false,
          reason: 'forbidden-by-privacy-policy',
        };
      }

      const meetsConditions = /^[a-z][a-z0-9_.-]{4,}$/.test(lowerUsername);
      if (!meetsConditions) {
        return {
          available: false,
          reason: 'invalid-format',
        };
      }

      const alreadyExistsUsername =
        await this.entity.getOneByUsername(lowerUsername);
      if (alreadyExistsUsername) {
        return {
          available: false,
          reason: 'already-exists',
        };
      }

      return {
        available: true,
        reason: null,
      };
    } catch (error) {
      throw new InternalException(null, null, error);
    }
  }
}
