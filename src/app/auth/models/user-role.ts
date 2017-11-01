import { Model } from '../../models/model';

export class UserRole extends Model {

  id: string;

  get title(): string {
    return `auth.roles.${this.id}`;
  }

}
