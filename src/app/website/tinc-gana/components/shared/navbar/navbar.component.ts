import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) {
   }

  ngOnInit() {
  }


buscarRceta( termino: string ){
    // console.log('término de búsqueda en navbar: ', termino);
   this.router.navigate( ['tinc-gana/buscar', termino] );
}

}
