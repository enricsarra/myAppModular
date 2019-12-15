import { Component, OnInit } from '@angular/core';
import { RcetasService, Rceta } from '../../servicios/rcetas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rcetas',
  templateUrl: './rcetas.component.html'
})
export class RcetasComponent implements OnInit {

  rcetas: Rceta[];
  ingredientesArray: string[];
  // tslint:disable-next-line: variable-name
  constructor( private rcetasService: RcetasService,
               private router: Router) {
    this.rcetas = [];
  }

  ngOnInit() {
    // console.log('La página recetas ya está renderizada. ngOnInit del componente rcetas listo');

    this.rcetas = this.rcetasService.getRcetas();
    // console.log( 'recetas.....:',this.rcetas );
   
  }

  verRceta( idx: number) {
    // console.log(idx);
    this.router.navigate( ['/rceta', idx]);
  }

}
