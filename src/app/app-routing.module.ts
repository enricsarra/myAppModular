import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

// importamos PreloadAllModules para precargar los modulos a medida de la actividad del navegador.
// Si hay mas de 20 módulos, habrá que hacer precarga selectiva.

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
