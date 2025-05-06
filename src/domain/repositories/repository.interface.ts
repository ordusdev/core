export interface DomainRepositoryFilter {
  [key: string]: any;
}

export interface DomainRepository<Model> {
  createOne(data: Omit<Model, 'id'>): Promise<Model | null>;
  findOne(id: string): Promise<Model | null>;
  findAll(): Promise<Model[]>;
  findMany(filters?: Record<string, string>): Promise<Model[]>;
  updateOne(id: string, data: Partial<Model>): Promise<Model | null>;
  deleteOne(id: string): Promise<void>;
  deleteAll(): Promise<void>;
  count(filters?: DomainRepositoryFilter): Promise<number>;
}
