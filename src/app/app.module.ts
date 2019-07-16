import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DetailTasksComponent } from './detail-tasks/detail-tasks.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from '../service/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditTasksComponent,
    AddTaskComponent,
    DetailTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
