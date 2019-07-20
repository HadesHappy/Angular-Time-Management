import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from 'src/app/model/task.model';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {

  urlTask:string="http://localhost:8080/tasks";

  constructor(private http:HttpClient){}

    getAllTasks():Observable<Task[]>{
       return  this.http.get<Task[]>(this.urlTask);
    }
    getOneById(id:number){
      return this.http.get<Task>(this.urlTask +"/" + id);

    }
    saveTask(task:Task){
     return  this.http.post(this.urlTask,task);
    }
    updateTask(task:Task){
     return  this.http.put(this.urlTask,task);
    }
    deleteTask(task:Task){
     return this.http.delete(this.urlTask + "/" + task.id);
    }
  startTask(task:Task){
    task.StartDate = new Date();
  }

  endTask(task: Task) {
    task.EndDate = new Date();
    task.completedDate=true;


  }




}
