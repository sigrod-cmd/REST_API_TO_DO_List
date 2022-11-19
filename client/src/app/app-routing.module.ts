import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component:TaskListComponent
  },
  {
    path: 'tareas/add', 
    component:TaskFormComponent
 },  
{
 path: 'tareas/edit/:Id',
 component: TaskFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
