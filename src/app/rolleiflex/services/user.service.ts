import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination, ISummary, ILeicaData, IAPIList, IHistoryList } from '../../models/api';
import { RolleiflexService } from './base.service';
import { User } from '../models/user';

export interface ISlugToID {
  [key: string]: string;
}


@Injectable()
export class UserService extends RolleiflexService {

  protected endpoint = 'users'

  public list(queryParams?: any): Observable<IAPIList> {
    if (queryParams === undefined) {
      queryParams = {};
    }
    return this._list(
      queryParams
    ).do(
      data => {
        const items: User[] = [];
        for (const item of data.data) {
          items.push(new User(item));
        }
        data.data = items;
      }
    );
  }

  public get(id: string): Observable<ISummary> {
    return this._get(id);
  }

  public post(payload: any): Observable<ISummary> {
    return this._post(payload);
  }

  public put(id: string, payload: any): Observable<ISummary> {
    return this._put(id, payload);
  }

}
