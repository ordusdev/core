import { UserModel } from 'src/domain/models/user.model';
import { UsersRepository } from 'src/domain/repositories/users.repository.interface';
import { PrismaRepository } from './prisma.repository';
import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/conn/prisma/client/prisma.service';

@Injectable()
export class UsersPrismaRepository
  extends PrismaRepository<UserModel>
  implements UsersRepository
{
  constructor(
    @Inject(PrismaService.name)
    prismaClient: PrismaService,
  ) {
    super(prismaClient, 'user');
  }

  findOneByEmail(email: string): Promise<UserModel | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findOneByUsername(username: string): Promise<UserModel | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }
}
