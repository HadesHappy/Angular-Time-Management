import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../service/task.service';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  taskId:number;
  task: Task;
  mode:string;

  constructor(private route:ActivatedRoute,private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    this.mode ='edit';
    this.task = new Task();
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getOneById(this.taskId)
      .subscribe(task=>{
        this.task = task;
      });
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(data=>{
      this.router.navigate(['/tasks']);
    });

  }

  update(task: Task) {
     this.mode ='comfirm';
  }
}
