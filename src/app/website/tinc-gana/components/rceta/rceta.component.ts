import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RcetasService } from '../../servicios/rcetas.service';

@Component({
  selector: 'app-rceta',
  templateUrl: './rceta.component.html'
})
export class RcetaComponent implements OnInit {

  rceta: any = { };
  public parametroPasado: string;
  public parametrosPasados: Params;

  constructor( private activatedRoute: ActivatedRoute,
               private rcetasService: RcetasService
    ) {
      // He posat aquest codi a ngOnInit perque quan teclejo
      // localhost:4200/rcetas/3  casca.
      // Anaba bé sol quan pulsaba el botó "ver más"
      /* this.activatedRoute.params.subscribe( params => {
        // tslint:disable-next-line: no-string-literal
        console.log( 'parametros: ', params, params['id']);
        // tslint:disable-next-line: no-string-literal
        this.rceta =  this.rcetasService.getHeroe( params['id'] );
        console.log( 'Heroe:', this.rceta );
        }); */
   }

  ngOnInit( ) {
    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      console.log( 'parametros: ', params, params['id']);
      // tslint:disable-next-line: no-string-literal
      this.rceta =  this.rcetasService.getRceta( params['id'] );
      console.log( 'Heroe:', this.rceta );
      // tslint:disable-next-line: no-string-literal
      this.parametroPasado = params['id'];
      this.parametrosPasados = params;
      
      });

  }

}
