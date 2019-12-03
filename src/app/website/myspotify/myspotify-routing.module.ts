import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// importamos el componente que vamos a renderizar y le decimos la ruta
import { MyspotifyComponent } from '@myspotify/components/myspotify/myspotify.component';
import { HomeComponent } from '@myspotify/components/home/home.component';
import { SearchComponent } from '@myspotify/components/search/search.component';
import { ArtistaComponent } from '@myspotify/components/artista/artista.component';


const routes: Routes = [
  {
    path: '', component: MyspotifyComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      { path: 'artist/:id',
        component: ArtistaComponent,
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyspotifyRoutingModule { }
