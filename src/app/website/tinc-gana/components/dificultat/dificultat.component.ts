import { Component, OnInit } from '@angular/core';

import { RcetasService, Rceta } from '../../servicios/rcetas.service';

@Component({
  selector: 'app-dificultat',
  templateUrl: './dificultat.component.html',
  styleUrls: ['./dificultat.component.css']
})
export class DificultatComponent implements OnInit {
  rcetas: Rceta[];
  dificultatRecetas: any[] = [];

  constructor( private rcetasService: RcetasService) {
this.rcetas = [];
}

  ngOnInit() {
    this.rcetas = this.rcetasService.getRcetas();
    this.dificultatRecetas = this.rcetas.map(({ nombre, dificultat}) => ({ name: nombre, value: dificultat}))
    //console.log( 'this.dificultatRecetas', this.dificultatRecetas );
  }
}
