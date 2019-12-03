import { NgModule } from '@angular/core';
/* import { AppRoutingModule } from './../../app/app-routing.module'; */
import { CommonModule } from '@angular/common';

import { MyspotifyRoutingModule } from '@myspotify/myspotify-routing.module';

import { MyspotifyComponent } from '@myspotify/components/myspotify/myspotify.component';
import { HomeComponent } from '@myspotify/components/home/home.component';
import { NavbarComponent } from '@myspotify/components/shared/navbar/navbar.component';
import { LoadingComponent } from '@myspotify/components/shared/loading/loading.component';
import {ArtistaComponent} from '@myspotify/components/artista/artista.component';
import { SearchComponent } from '@myspotify/components/search/search.component';
import { TarjetasComponent } from '@myspotify/components/tarjetas/tarjetas.component';
import {DomseguroPipe} from '@myspotify/pipes/domseguro.pipe';
import { NoimagePipe } from '@myspotify/pipes/noimage.pipe';



import {SpotifyService } from '@myspotify/services/spotify.service';

@NgModule({
  declarations: [
    MyspotifyComponent,
    NavbarComponent,
    HomeComponent,
    LoadingComponent,
    ArtistaComponent,
    SearchComponent,
    TarjetasComponent,
    DomseguroPipe,
    NoimagePipe
  ],
  imports: [
    CommonModule,
    MyspotifyRoutingModule
  ],
  providers: [ SpotifyService ]
})
export class MyspotifyModule { }
