import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* -----------
Para instalar angular material: ng add @angular/material
https://material.angular.io/guide/getting-started 
 - nos lo añade al package.json 
 - modifica styles.css 
 - modifica html
 - opcion instalar hammer (gestos). 
      - se añade "import 'hammerjs'" en main.ts;

 Así podemos crear este modulo e importarlo en app.module
*/


/* https://material.angular.io/components/card/api

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /* MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatBadgeModule */
  ],
  exports: [
    /* MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatBadgeModule */
  ]
})
export class MaterialModule { }
