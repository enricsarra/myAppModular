import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {SharedModule} from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// Activar angular-material: imports: MaterialModule
 // import { MaterialModule } from '@material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// como NavBarComponent no es un módulo, lo importamos
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
