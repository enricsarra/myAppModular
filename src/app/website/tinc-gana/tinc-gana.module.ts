import { NgModule } from '@angular/core';
/* import { AppRoutingModule } from './../../app/app-routing.module'; */
import { CommonModule } from '@angular/common';

// Rutas
import { TincGanaRoutingModule } from '@tinc-gana/tinc-gana-routing.module';



// Servicios
import { RcetasService } from './servicios/rcetas.service';

// Componentes
import { TincGanaComponent } from './tinc-gana.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RcetasComponent } from './components/rcetas/rcetas.component';
import { RcetaComponent } from './components/rceta/rceta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RcetaTarjaComponent } from './components/rceta-tarja/rceta-tarja.component';

import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    TincGanaComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RcetasComponent,
    RcetaComponent,
    BuscadorComponent,
    RcetaTarjaComponent,
    DomseguroPipe
  ],
  imports: [
    CommonModule,
    TincGanaRoutingModule
  ],
  providers: [
    RcetasService
  ],
  bootstrap: [TincGanaComponent]
})
export class TincGanaModule { }
