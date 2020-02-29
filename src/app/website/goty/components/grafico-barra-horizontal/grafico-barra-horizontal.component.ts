import { Component, OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  
  /* results: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 250
    },
    {
      name: 'Juego 3',
      value: 15
    },
    {
      name: 'Juego 4',
      value: 30
    }
  ]; */
  multi: any[];

  // quito  view porque no es responsive y lo resuelvo en el css del componente
  // view: any[] = [700, 400];

  // options
  showXAxis  = true;
  showYAxis  = true;
  gradient   = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Vots';
  showYAxisLabel = true;
  yAxisLabel = 'Plats';

  colorScheme = 'nightLights';
  // intervalo;
  constructor() {
    /* this.intervalo = setInterval ( () => {
      console.log('Tick-tick');
      // no se puede modificar results
      const newResults = [...this.results];
      newResults.forEach(element => {
      element.value = Math.round(Math.random() * 500);
    });
      this.results = [...newResults];
    }, 1500 ) ; */

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval( this.intervalo );
  }

}


