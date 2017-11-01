import { Model } from '../../models/model';

export class User extends Model {

  id: string;
  first_name: string;
  last_name: string;
  fullname: string;
  email: string;
  locale: string;
  groups: string[];

}
