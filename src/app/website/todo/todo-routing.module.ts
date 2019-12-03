import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importamos el componente que vamos a renderizar y le decimos la ruta
import { TodoListComponent } from '@todo/components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
