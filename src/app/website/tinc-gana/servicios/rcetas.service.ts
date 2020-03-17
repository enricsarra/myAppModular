import { Injectable } from '@angular/core';
import { receptes } from '../models/receptes';

@Injectable()
export class RcetasService {
  private rcetas: Rceta[] = [];

    constructor() {
      this.rcetas = receptes;
    }

    public getRcetas(): Rceta[] {
        return this.rcetas;
    }
    public getRceta( idx: string ) {
      return this.rcetas[idx];
    }

    public buscarRcetas( termino: string ): Rceta[] {

      const rcetasArr: Rceta[] = [];
      termino = termino.toLowerCase();
      /* for ( const rceta of this.rcetas ) {
        const nombre = rceta.nombre.toLowerCase();
        if ( nombre.indexOf( termino ) >= 0  ) {
          rcetasArr.push( rceta );
        }
      } */
      for ( let i = 0; i < this.rcetas.length; i ++ ) {
        const rceta = this.rcetas[i];
        const nombre = rceta.nombre.toLowerCase();
        if ( nombre.indexOf( termino ) >= 0  ) {
          rceta.idx = i;
          rcetasArr.push( rceta );
        }
      }
      return rcetasArr;
    }

}

export interface Rceta {
    nombre: string;
    bio: string;
    ingredientes: string;
    elaboracion: string;
    img: string;
    aparicion: string;
    dificultat: number;
    video: string;
    idx?: number;
    tiempo?: number;
}
