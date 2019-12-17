import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { GraficoBarraverticalComponent } from './grafico-barra-vertical/grafico-barra-vertical.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent,
    GraficoBarraverticalComponent
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent,
    GraficoBarraverticalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
