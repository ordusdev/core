import { Module } from '@nestjs/common';
import { PrismaRepositories } from '.';
import { PrismaModule } from '../client/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: PrismaRepositories,
  exports: PrismaRepositories,
})
export class PrismaRepositoriesModule {}
