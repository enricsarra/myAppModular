import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// módulo compartido parte fija para website: layout, header, navbar, footer
import { SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class WebsiteModule { }
