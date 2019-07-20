import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task.model';
import {TaskService} from '../service/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];
  task:Task;

  constructor(private taskService:TaskService,private router:Router) {}


  ngOnInit() {
     this.taskService.getAllTasks().subscribe( task => this.tasks = task);
  }

  editTask(task: Task) {
    this.router.navigate(['tasks/edit',task.id]);
   /* this.taskService.updateTask(task).subscribe((task:Task)=> this.task = task) ;*/
    
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((task :Task)=> this.task = this.task);
    
  }
  startTask(task:Task){
    this.taskService.saveTask(task);
    task.StartDate = new Date();
    task.completedDate=false;
    this.taskService.saveTask(this.task).subscribe(data=>this.router.navigate(['/tasks']));
  }

  endTask(task: Task) {
    this.taskService.endTask(task);
    this.taskService.saveTask(task).subscribe(data=>this.router.navigate(['/tasks']));


  }
}
