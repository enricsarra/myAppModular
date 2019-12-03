import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '@shared/components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@home/homemodule').then(m => m.HomeModule)
      },

      {
        path: 'home',
        loadChildren: () => import('@home/homemodule').then(m => m.HomeModule)
      },
      {
        path: 'todos',
        loadChildren: () => import('@todo/todo.module').then(m => m.TodoModule)
      },
      {
        path: 'myspotify',
        loadChildren: () => import('@myspotify/myspotify.module').then(m => m.MyspotifyModule)
      },
      { path: '**', pathMatch: 'full', redirectTo: ''},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
