
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GotyRoutingModule } from './goty-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../../src/environments/environment';


import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { GotyComponent as Enric } from './goty.component';
import { ComponentsModule } from './components/components.module';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    Enric,
    GotyComponent,
    InicioComponent

  ],
  imports: [
    CommonModule,
    GotyRoutingModule,
    ComponentsModule,
    HttpClientModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [Enric]
})
export class GotyModule { }
