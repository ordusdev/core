import {
  DomainRepository,
  DomainRepositoryFilter,
} from 'src/domain/repositories/repository.interface';
import { PrismaService } from 'src/infra/conn/prisma/client/prisma.service';
import { nanoid } from 'nanoid';

export class PrismaRepository<T> implements DomainRepository<T> {
  protected prisma: PrismaService;
  protected modelName: string;

  constructor(prismaClient: PrismaService, modelName: string) {
    this.prisma = prismaClient;
    this.modelName = modelName;
  }

  private generateId() {
    return nanoid(8);
  }

  createOne(data: T): Promise<T> {
    data['id'] = this.generateId();
    return this.prisma[this.modelName].create({ data }) as Promise<T>;
  }

  findOne(id: string): Promise<T> {
    return this.prisma[this.modelName].findUnique({
      where: { id },
    }) as Promise<T>;
  }

  findAll(): Promise<T[]> {
    return this.prisma[this.modelName].findMany() as Promise<T[]>;
  }

  findMany(filters?: Record<string, string>): Promise<T[]> {
    return this.prisma[this.modelName].findMany({
      where: filters,
    }) as Promise<T[]>;
  }

  updateOne(id: string, data: Partial<T>): Promise<T> {
    return this.prisma[this.modelName].update({
      where: { id },
      data,
    }) as Promise<T>;
  }

  deleteOne(id: string): Promise<void> {
    return this.prisma[this.modelName].delete({
      where: { id },
    }) as Promise<void>;
  }

  deleteAll(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  count(filters?: DomainRepositoryFilter): Promise<number> {
    return this.prisma[this.modelName].count({
      where: filters,
    }) as Promise<number>;
  }
}
