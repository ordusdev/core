import * as bcrypt from 'bcryptjs';

export class HashUtil {
  static encrypt(plain: string) {
    return bcrypt.hashSync(plain, 12);
  }

  static verify(plain: string, hash: string) {
    return bcrypt.compareSync(plain, hash);
  }
}
