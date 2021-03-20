import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Respuesta } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {


  private api='http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  getAllRespuestas(){
    const path=`${this.api}/resp/`;
    return this.http.get<Respuesta[]>(path);
  }

  getRespuesta(id:number){
    const path=`${this.api}/resp/res/?id=${id}`;
    return this.http.get<Respuesta>(path);
  }
  

}
