import { ISummary } from '../../models/api';


export interface IGroup extends ISummary {

  name: string;
  total_users: number;

}

export interface IUser extends ISummary {

  first_name: string;
  last_name: string;
  fullname: string;
  email: string;
  locale: string;
  groups: IGroup[];
  last_login: any;

  groupSlugs: string[];
  isInternal: boolean;
  isCreative: boolean;
  isCustomer: boolean;

}

