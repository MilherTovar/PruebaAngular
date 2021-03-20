import { Component, OnInit } from '@angular/core';
import { ContextoService } from '../../service/contexto.service';
import { RespuestaService } from '../../service/respuesta.service';
import { UsuarioService } from '../../service/usuario.service'
import { ResultadoService } from '../../service/resultado.service';

import { Respuesta } from '../../interfaces/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {

  contexto = '';
  pregunta = '';
  paso: number = null;
  respuestas: Respuesta[] = null;
  items: number[] = [1, 2, 3, 4, 5];
  des_respuesta: string;
  currentrespue: number = 9;
  respuestaElegida: any={};

  constructor(
    private contextService: ContextoService,
    private respuestaService: RespuestaService,
    private usuarioService:UsuarioService,
    private resultadoService:ResultadoService
  ) { }

  ngOnInit() {
    this.paso = 0;
    this.contextService.getContext(3)
      .subscribe(contexto => {
        this.contexto = contexto.context;
        this.pregunta = contexto.pregunta;
      });
    this.respuestaService.getAllRespuestas()
      .subscribe(respuestas => {
        this.respuestas = respuestas.filter(respuesta => respuesta.id_contexto == 3);
      });
    console.log(this.paso);
  }

  incrementar() {
    if (this.paso < 4) {
      this.paso++;
      this.contextService.getContext(this.paso + 3)
        .subscribe(contexto => {
          this.contexto = contexto.context;
          this.pregunta = contexto.pregunta;
        });
      this.respuestaService.getAllRespuestas()
        .subscribe(respuestas => {
          this.respuestas = respuestas.filter(respuesta => respuesta.id_contexto == this.paso + 3);
        });
    }
    this.des_respuesta = null;
  }

  ubicar_respuesta(id: number) {
    this.currentrespue = id;
    this.respuestaService.getAllRespuestas()
      .subscribe(respuestas => {
        const varia = respuestas.find(respuesta => respuesta.id == id);
        this.des_respuesta = varia.valor ? "Correcto" : "Incorrecto";

        this.des_respuesta
      });
    
      this.usuarioService.getpersona('1')
      .subscribe(persona=>{
        this.respuestaElegida.persona=persona.nombre+' '+persona.apellido;
      });

      this.contextService.getContext(this.paso + 3)
        .subscribe(contexto => {
          this.respuestaElegida.pregunta=contexto.pregunta;
        });
      
        this.respuestaElegida.valor=this.des_respuesta=="Correcto"?20:10;
      
        this.resultadoService.insertarRespuesta(this.respuestaElegida)
        .subscribe();

        console.log(this.respuestaElegida);

        
  }

  ubicar_contexto(id: number) {
    console.log("Botón: " + id);
    this.contextService.getContext(id + 3)
      .subscribe(contexto => {
        this.contexto = contexto.context;
        this.pregunta = contexto.pregunta;
      });
    this.respuestaService.getAllRespuestas()
      .subscribe(respuestas => {
        this.respuestas = respuestas.filter(respuesta => respuesta.id_contexto == id + 3);
      });
    this.des_respuesta = null;
    this.paso = id;
  }

}
