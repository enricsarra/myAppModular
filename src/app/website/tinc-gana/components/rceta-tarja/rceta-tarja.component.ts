import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rceta-tarja',
  templateUrl: './rceta-tarja.component.html'
})
export class RcetaTarjaComponent implements OnInit {

  @Input() rceta: any = {};
  @Input() index: number;
  @Output() rcetaSeleccionado: EventEmitter<number>;
  constructor( private router: Router ) {
    this.rcetaSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verRceta() {
    // console.log('index: ', this.index);
    this.router.navigate( ['/tinc-gana/rceta', this.index] );
    // this.rcetaSeleccionado.emit( this.index );
  }

}
