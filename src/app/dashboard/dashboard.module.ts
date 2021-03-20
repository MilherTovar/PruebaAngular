import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { PreguntaComponent } from '../components/pregunta/pregunta.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PreguntaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,    
  ]
})
export class DashboardModule{}
