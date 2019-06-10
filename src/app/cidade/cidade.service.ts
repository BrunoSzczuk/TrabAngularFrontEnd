import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../cidade/models/cidade';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(cidade: Cidade): Observable<any> {
    return this.http.post(environment.urlAPI + "cidades/", cidade)
      .catch((error: any) => Observable.throw(error));
  }

  update(cidade: Cidade): Observable<any> {
    return this.http.put(environment.urlAPI + "cidades/" + cidade.id, cidade)
      .catch((error: any) => Observable.throw(error));
  }

  findAll(): Observable<any> {
    return this.http.get(environment.urlAPI + "cidades/")
      .catch((error: any) => Observable.throw(error));
  }

  remove(id: number): Observable<any> {
    return this.http.delete(environment.urlAPI + "cidades/" + id)
      .catch((error: any) => Observable.throw(error));
  }

}
