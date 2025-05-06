import { LogModel } from 'src/domain/models/log.model';
import { DomainRepository } from './repository.interface';

export const LOGS_REPOSITORY = 'LOGS_REPOSITORY';

export interface LogsRepository extends DomainRepository<LogModel> {}
