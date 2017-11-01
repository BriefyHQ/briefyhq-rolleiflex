import { Actor } from './summary';
import { Model } from '../model';
import { DateMoment } from '../type';

import * as moment from 'moment';


export interface ILeicaModel {

  id: string;
  slug: string;
  title: string;
  description: string;

  created_at: any;
  updated_at: any;

  // Workflow
  state: string;

  // Frontend
  absolute_url: string;

}

export class LeicaModel extends Model implements ILeicaModel {

  static _endpoint = '';
  static modelName = '';

  // Metadata
  id: string;
  slug: string;
  title: string;
  description: string;
  private _created_at: moment.Moment;
  private _updated_at: moment.Moment;

  // Workflow
  public state: string;

  /** Prepare Actor info to be assigned to a property */
  protected processActorInfo(value: Actor[]): Actor[] {
    const actors = [];
    if (value && value.length > 0) {
      for (const item of value) {
        actors.push(new Actor(item));
      }
    }
    return actors;
  }

  get created_at(): DateMoment {
    return this._created_at;
  }

  set created_at(value: DateMoment) {
    if (value) {
      this._created_at = moment(value);
    }
  }

  get updated_at(): DateMoment {
    return this._updated_at;
  }

  set updated_at(value: DateMoment) {
    if (value) {
      this._updated_at = moment(value);
    }
  }

  get baseEndpoint(): string {
    return (<any>this.constructor)._endpoint;
  }

  get className(): string {
    return (<any>this.constructor).modelName;
  }

  get title_or_id(): string {
    let response = this.title;
    if (!response) {
      response = this.slug;
    }
    return response;
  }

  get fmtState(): string {
    const modelName = (<any>this.constructor).modelName.toLowerCase();
    const state = this.state;
    return `${modelName}.workflow.${state}`;
  }

  get fmtStateFlag(): boolean {
    return false;
  }

  get absolute_url(): string {
    return `/${this.baseEndpoint}/${this.id}`;
  }

}
