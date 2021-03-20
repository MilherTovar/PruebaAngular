import { Component } from '@angular/core';
import { LibroService } from '../service/libro.service';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  nombre_libro="Prueba";
  
    constructor(
      private libroService: LibroService
    ){}

    ngOnInit(){
      this.libroService.getpersona('2')
      .subscribe(libro=>{
        this.nombre_libro=libro.nombre;
      });
    }
}
