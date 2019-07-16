import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {EditTasksComponent} from './edit-tasks/edit-tasks.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {DetailTasksComponent} from './detail-tasks/detail-tasks.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path:'/tasks',component:TasksComponent},
  {path:'/tasks/new',component:AddTaskComponent},
  {path:'/tasks/details',component:DetailTasksComponent},
  {path:'/tasks/:id',component:EditTasksComponent},
  {path:'',component:AppComponent,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
