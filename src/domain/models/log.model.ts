import { LogLevelEnum, LogTypeEnum } from 'src/domain/enums/log.enum';
import { Model } from './model';
import { UserModel } from './user.model';

export class LogModel extends Model {
  level: LogLevelEnum;
  type: LogTypeEnum;
  origin: string;
  ipaddr: string;
  message: string;
  context?: JSON;
  createdById?: string;
  createdBy?: UserModel;

  constructor(data: Partial<LogModel>, id?: string) {
    super(data, id);
    Object.assign(this, data);
  }
}
