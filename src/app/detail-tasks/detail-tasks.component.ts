import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task.model';
import {TaskService} from '../service/task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-tasks',
  templateUrl: './detail-tasks.component.html',
  styleUrls: ['./detail-tasks.component.css']
})
export class DetailTasksComponent implements OnInit {
  task:Task
  constructor(private taskService:TaskService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.task = new Task();
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getOneById(id).subscribe(task=>{
      this.task=task;
    });

  }
  onBack(){
    this.router.navigate(['/tasks'])
  }
  startTask(task:Task){
    this.taskService.startTask(task);
    this.taskService.saveTask(this.task).subscribe(data=> this.task=task)
  }

  endTask(task: Task) {
    this.taskService.endTask(task);
    this.taskService.saveTask(this.task)
      .subscribe(data=>this.task=task)
  }
  editTask(task : Task) {

    this.task = new Task();
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getOneById(taskId)
      .subscribe(task=>{
        this.task = task;
      });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(data=>this.router.navigate(['/tasks']))

  }
}
