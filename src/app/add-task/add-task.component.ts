import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task.model';
import {TaskService} from '../service/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task:Task;
  mode:String;
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    this.task = new Task();
    this.mode='add';
  }

  create() {
    this.mode='confirm';
    
  }
  createTask(task:Task){
    this.taskService.saveTask(task).subscribe(data=>{
      this.router.navigate(['/tasks']);

    });

  }
}
