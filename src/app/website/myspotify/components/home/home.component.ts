
 // URL del front: https://spotiappweb.herokuapp.com/#/home 
 // es la url de como obtener tocken automático
 // URL del backend: https://spotiapp-get-token.herokuapp.com/ 

 import { Component, OnInit } from '@angular/core';
 import { SpotifyService } from '../../services/spotify.service';

 @Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styles: []
 })
 export class HomeComponent implements OnInit {
   nuevasCanciones: any[] = [];
   loading: boolean;
   error: boolean;
   mensageError: string;

   constructor( private spotify: SpotifyService ) {
     this.loading = true;
     this.error = false;
     if (!sessionStorage.getItem('token')) {
       this.getToken();
     } else {
       this.getNewReleases();
     }

   }
 
   ngOnInit() {
   }
 
   getToken() {
     this.spotify.getToken().subscribe(data => this.getNewReleases());
   }
 
   getNewReleases() {
     this.loading = true;
     this.spotify.getNewReleases()
       .subscribe(data => {
         this.nuevasCanciones = data;
         this.loading = false;
       }, ( errorServicio ) => {
             this.loading = false;
             this.error = true;
             console.log( errorServicio);
             this.mensageError = errorServicio.error.error.message;
       });
   }
 }
