import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  contadorConstructor = 0;
  contadorngOnInit = 0;


  juegos: Game[] = [];
  constructor( private gameService: GameService ) { }

  ngOnInit() {
    this.contadorngOnInit = this.contadorngOnInit +1;

    this.gameService.getNominados()
      .subscribe( juegos => {
        this.juegos = juegos;
      });
  }

  votarJuego( juego: Game ) {

    this.gameService.votarJuego( juego.id )
      .subscribe( (resp: {ok: boolean, mensaje: string }) => {
        if ( resp.ok ) {
          Swal.fire('Gracies',resp.mensaje, 'success' );
        } else {
          Swal.fire('Oops!!!',resp.mensaje, 'error' );
        }

      });

  }

}
