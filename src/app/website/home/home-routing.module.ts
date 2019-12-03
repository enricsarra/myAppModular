import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importamos el componente que vamos a renderizar y le decimos la ruta
import { HomeComponent } from '@home/components/home/home.component';
import { LayoutComponent } from '@home/components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: '',
          component: HomeComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
