import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];
  
  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
    // obtener referencia a la db para detectar cambios en 
    // la base de datos. "valueChanges()"" 
    // collection es un observable.
    // Necesitamos el pipe para que "resp" sea un array de 
    // objetos con los atributos "name y value" que son los 
    // que espera "grafico-barra.components.ts".
    // En "resp.map( ({ name, votos })...", utilizamos la 
    // desustruracion con ("{ name, votos })" en lugar de 
    // (juegos)"



    this.db.collection('goty').valueChanges()
    .pipe(
      map( (resp: Game[]) => resp.map( ({ name, votos }) => ({ name, value: votos }) ))
    )
    .subscribe( juegos => {
      console.log('juegos',juegos);
      this.juegos = juegos;
    });

    






  /* this.db.collection('goty').valueChanges()
    .subscribe( resp => {
  // console.log(juegos);
  console.log("resp... ",resp);
}); */



  }

}
