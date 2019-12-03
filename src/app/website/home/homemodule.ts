import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from '@home/home-routing.module';
import { HomeComponent } from '@home/components/home/home.component';
import { LayoutComponent } from '@home/components/layout/layout.component';


import { ServicioService } from '@home/services/servicio.service';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [ ServicioService ]
})
export class HomeModule { }
