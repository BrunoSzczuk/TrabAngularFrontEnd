import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../pessoa/models/pessoa';
import { Observable } from 'rxjs-compat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(pessoa: Pessoa): Observable<any> {
    return this.http.post(environment.urlAPI + "pessoas/", pessoa)
      .catch((error: any) => Observable.throw(error));
  }

  update(pessoa: Pessoa): Observable<any> {
    return this.http.put(environment.urlAPI + "pessoas/" + pessoa.id, pessoa)
      .catch((error: any) => Observable.throw(error));
  }

  findAll(): Observable<any> {
    return this.http.get(environment.urlAPI + "pessoas/")
      .catch((error: any) => Observable.throw(error));
  }

  remove(id: number): Observable<any> {
    return this.http.delete(environment.urlAPI + "pessoas/" + id)
      .catch((error: any) => Observable.throw(error));
  }

}
