import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {EditTasksComponent} from './edit-tasks/edit-tasks.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {DetailTasksComponent} from './detail-tasks/detail-tasks.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [

  {path:'tasks',component:TasksComponent},
  {path:'tasks/new',component:AddTaskComponent},
  {path:'tasks/:id',component:DetailTasksComponent},
  {path:'tasks/edit/:id',component:EditTasksComponent},
  {path:'',component:HomeComponent,pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
