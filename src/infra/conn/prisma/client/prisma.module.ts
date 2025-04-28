import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: PrismaService.name,
      useClass: PrismaService,
    },
  ],
  exports: [PrismaService.name],
})
export class PrismaModule {}
