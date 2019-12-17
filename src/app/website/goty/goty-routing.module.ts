import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GotyComponent as Enric} from "./goty.component";
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';


const routes: Routes = [
  {
    path: '', component: Enric,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'goty',
        component: GotyComponent
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GotyRoutingModule { }
