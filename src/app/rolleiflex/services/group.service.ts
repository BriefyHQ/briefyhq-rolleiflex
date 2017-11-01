import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination, ISummary, ILeicaData, IAPIList, IHistoryList } from '../../models/api';
import { RolleiflexService } from './base.service';
import { Group } from '../models/group';


@Injectable()
export class GroupService extends RolleiflexService {

  protected endpoint = 'groups'

  public list(queryParams?: any): Observable<IAPIList> {
    if (queryParams === undefined) {
      queryParams = {};
    }
    return this._list(
      queryParams
    ).do(
      data => {
        const items: Group[] = [];
        for (const item of data.data) {
          items.push(new Group(item));
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
