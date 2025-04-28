import { randomUUID } from 'crypto';

export abstract class Model {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<Model>, id?: string) {
    Object.assign(this, data);
    if (!this.id) {
      this.id = id || randomUUID().toString().replaceAll('-', '');
    }
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
