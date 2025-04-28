import { OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from 'src/infra/conn/prisma/generated';
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
