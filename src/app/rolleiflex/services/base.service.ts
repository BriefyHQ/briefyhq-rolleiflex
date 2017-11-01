import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination, ISummary, ILeicaData, IAPIList, IHistoryList } from '../../models/api';


@Injectable()
export class RolleiflexService {

  private baseEndpoint = environment.api.rolleiflex;
  protected endpoint = ''

  constructor(protected http: HttpClient) {}

  private processQueryParams(queryParams?: any): HttpParams {
    let params = new HttpParams();
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params = params.set(key, queryParams[key]);
        }
      }
    }
    return params;
  }

  protected _list(queryParams?: any): Observable<IAPIList> {
    const endpoint = `${this.baseEndpoint}/${this.endpoint}`;
    return this.http.get<IAPIList>(
      endpoint,
      {params: this.processQueryParams(queryParams)}
    );
  }

  protected _get(id: string): Observable<ISummary> {
    const endpoint = `${this.baseEndpoint}/${this.endpoint}/${id}`;
    return this.http.get<ISummary>(endpoint);
  }

  protected _post(payload: any): Observable<ISummary> {
    const endpoint = `${this.baseEndpoint}/${this.endpoint}`;
    return this.http.post<ISummary>(endpoint, payload);
  }

  protected _put(id: string, payload: any): Observable<ISummary> {
    const endpoint = `${this.baseEndpoint}/${this.endpoint}/${id}`;
    return this.http.put<ISummary>(endpoint, payload);
  }

}
