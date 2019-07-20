import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DetailTasksComponent } from './detail-tasks/detail-tasks.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './service/task.service';
import { HeaderComponent } from './header/header.component';
import {Route, Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditTasksComponent,
    AddTaskComponent,
    DetailTasksComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
