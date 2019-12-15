import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RcetasService } from '../../servicios/rcetas.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  rcetas: any[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute,
               private rcetasService: RcetasService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    // tslint:disable-next-line: no-string-literal
    console.log('componenteBuscador: parametros busqueda', params, params['termino']);
    // tslint:disable-next-line: no-string-literal
    this.termino = params['termino'];

    // tslint:disable-next-line: no-string-literal
    this.rcetas = this.rcetasService.buscarRcetas( params['termino']);
    console.log( 'componenteBuscador de receptes trovades: ', this.rcetas);
    });
  }

}
