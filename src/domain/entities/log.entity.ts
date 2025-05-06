import { LogModel } from 'src/domain/models/log.model';
import { LogsRepository } from 'src/domain/repositories/logs.repository.interface';
import { Entity } from './entity';

export class LogEntity extends Entity<LogModel> {
  protected repository: LogsRepository;
}
