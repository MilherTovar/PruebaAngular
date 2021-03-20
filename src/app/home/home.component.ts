import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre = 'Milher Fabián';
  apellido='Tovar Rubiano';
  correo='mf.tovar@uniandes.edu.co';
  telefono='3136294369';
  
  user=new Usuario();

  constructor(
    private personaService: UsuarioService
  ){}

  ngOnInit(){
    /*this.personaService.getpersona('1')
    .subscribe(persona=>{
      this.nombre=persona.nombre;
      this.apellido=persona.apellido;
      this.correo=persona.apellido;
      this.telefono=persona.telefono;
    });*/
  }

  crear_usuario(){
    this.user.nombreUsuario='Milher Fabián';
    this.user.apellidoUsuario='Tovar Rubiano';
    this.user.email='mf.tovar@uniandes.edu.co';
    this.user.password='Camila1447';
    console.log(this.user);
    this.personaService.createpersona(this.user)
    .subscribe(data=>{
      console.log(data);
    })
  }
  
}
