import { Module } from '@nestjs/common';
import { Entities } from '.';
import { PrismaRepositoriesModule } from 'src/infra/conn/prisma/repositories/repositories.module';

@Module({
  imports: [PrismaRepositoriesModule],
  providers: Entities,
  exports: Entities,
})
export class EntitiesModule {}
