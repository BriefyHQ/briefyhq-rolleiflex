import { DateMoment } from '../../models/type';
import { LeicaModel } from '../../models/leica/leica-model';
import { Group } from './group';
import { IGroup, IUser } from './interfaces';

import * as moment from 'moment';

export class User extends LeicaModel implements IUser {

  static _endpoint = 'users';
  static modelName = 'User';

  first_name: string;
  last_name: string;
  fullname: string;
  email: string;
  locale: string;
  _groups: IGroup[];
  groupSlugs: string[];
  group_ids: string[];
  isInternal: boolean;
  isCreative: boolean;
  isCustomer: boolean;
  _last_login: moment.Moment;

  get last_login(): DateMoment {
    return this._last_login;
  }

  set last_login(value: DateMoment) {
    if (value) {
      this._last_login = moment(value);
    }
  }

  get groups(): IGroup[] {
    return this._groups;
  }

  set groups(value: IGroup[]) {
    if (value) {
      const groups: Group[] = [];
      this.groupSlugs = [];
      this.isInternal = false;
      this.isCreative = false;
      this.isCustomer = false;
      for (const item of value) {
        const group = new Group(item);
        const slug = group.slug;
        this.groupSlugs.push(slug);
        if (slug === 'g:briefy') {
          this.isInternal = true;
        } else if (slug === 'g:professionals') {
          this.isCreative = true;
        } else if (slug === 'g:customers') {
          this.isCustomer = true;
        }
        groups.push(new Group(item));
      }
      this._groups = groups;
    }
  }

}
