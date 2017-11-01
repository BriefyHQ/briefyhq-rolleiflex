import { Model } from '../../model';
import { Actor } from '../summary';

import * as moment from 'moment';


export class History extends Model {

  public _states: any;

  public _actor: Actor;
  public _date: moment.Moment;
  public message: string;
  public from: string;
  public to: string;
  public transition: string;

  get actor(): any {
    const actor = this._actor;
    return actor;
  }

  set actor(value: any) {
    if (value) {
      this._actor = new Actor(value);
    }
  }

  get date(): any {
    return this._date;
  }

  set date(value: any) {
    if (value) {
      this._date = moment(value);
    }
  }

  get fmtTo(): string {
      return this._states[this.to];
  }

  get fmtFrom(): string {
      return this._states[this.from];
  }

}
