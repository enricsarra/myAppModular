import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// importamos el componente que vamos a renderizar y le decimos la ruta
import { TincGanaComponent } from './tinc-gana.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RcetasComponent } from './components/rcetas/rcetas.component';
import { RcetaComponent } from './components/rceta/rceta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {
    path: '', component: TincGanaComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      { path: 'rcetas',
        component: RcetasComponent,
      },
      { path: 'rceta/:id',
        component: RcetaComponent,
      },
      { path: 'buscar/:termino',
        component: BuscadorComponent,
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TincGanaRoutingModule { }
