import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Resultado } from '../interfaces/resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {


  private api='http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  insertarRespuesta(any){
      const path=`${this.api}/resul/`;
      return this.http.post<any>(path,any);
  }

  
}
