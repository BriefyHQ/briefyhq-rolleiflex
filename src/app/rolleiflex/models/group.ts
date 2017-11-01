import { LeicaModel } from '../../models/leica/leica-model';
import { IGroup } from './interfaces';

export class Group extends LeicaModel implements IGroup {

  static _endpoint = 'groups';
  static modelName = 'Group';

  name: string;
  total_users: number;
  total_active_users: number;

  get isInternal(): boolean {
    const name = this.name;
    return name.indexOf('g:briefy') === 0;
  }

}
