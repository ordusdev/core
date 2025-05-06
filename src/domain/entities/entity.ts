import {
  DomainRepository,
  DomainRepositoryFilter,
} from 'src/domain/repositories/repository.interface';

export abstract class Entity<Model> {
  protected repository: DomainRepository<Model>;

  constructor(repository: DomainRepository<Model>) {
    this.repository = repository;
  }

  async createOne(data: Omit<Model, 'id'>): Promise<Model | null> {
    return this.repository.createOne(data);
  }

  async getOneById(id: string): Promise<Model | null> {
    return this.repository.findOne(id);
  }

  async getAll(): Promise<Model[]> {
    return this.repository.findAll();
  }

  async getMany(filters?: Record<string, string>): Promise<Model[]> {
    return this.repository.findMany(filters);
  }

  async updateOne(id: string, data: Partial<Model>): Promise<Model | null> {
    return this.repository.updateOne(id, data);
  }

  async deleteOne(id: string): Promise<void> {
    return this.repository.deleteOne(id);
  }

  async count(filters?: DomainRepositoryFilter): Promise<number> {
    return this.repository.count(filters);
  }
}
