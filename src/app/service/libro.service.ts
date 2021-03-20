import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {


  private api='http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  getAllPersons(){
    const path=`${this.api}/libro/`;
    return this.http.get<Libro[]>(path);
  }

  getpersona(id:string){
    const path=`${this.api}/libro/book/?id=${id}`;
    return this.http.get<Libro>(path);
  }

  
}
