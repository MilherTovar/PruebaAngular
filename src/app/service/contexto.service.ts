import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contexto } from './../interfaces/contexto';

@Injectable({
  providedIn: 'root'
})
export class ContextoService {


  private api='http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  getAllContexts(){
    const path=`${this.api}/contexto/`;
    return this.http.get<Contexto[]>(path);
  }

  getContext(id:number){
    const path=`${this.api}/contexto/contexto/?id=${id}`;
    return this.http.get<Contexto>(path);
  }

  
}
