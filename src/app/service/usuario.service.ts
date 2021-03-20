import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from './../interfaces/persona';
import { Usuario } from './../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private api='http://localhost:8080/api';
  private apiv1='http://localhost:8080/api/v1';

  constructor(
    private http:HttpClient
  ) { }

  getAllPersons(){
    const path=`${this.api}/persona/`;
    return this.http.get<Persona[]>(path);
  }

  getpersona(id:string){
    const path=`${this.api}/persona/user/?id=${id}`;
    return this.http.get<Persona>(path);
  }

  createpersona(usuario:Usuario):Observable<any>{
    const headers={'content-type':'application/json'}
    const body=JSON.stringify(usuario);
    const path=`${this.apiv1}/nuevo`;
    console.log(body);
    return this.http.post(path,body,{'headers':headers})
  }

}
