import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DirectivaDirective } from './directives/directiva/directiva.directive';
import { PipePipe} from './pipes/pipe/pipe.pipe';


import { LayoutComponent} from '@shared/components/layout/layout.component';
import { HeaderComponent} from '@shared/components/header/header.component';
import { FooterComponent} from '@shared/components/footer/footer.component';
import { NavbarComponent} from '@shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    DirectivaDirective,
    PipePipe,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DirectivaDirective,
    PipePipe,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
