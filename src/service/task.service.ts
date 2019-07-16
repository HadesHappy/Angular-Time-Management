import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from 'src/model/task.model';

@Injectable()
export class TaskService {

  urlTask:string="http://localhost:8080/tasks";

  constructor(private http:HttpClient){

    getAllTasks(){
      this.http.get<Task[]>(this.urlTask);
    }
    getOneById(id:number){
      this.http.get<Task>(this.urlTask +"/" + id);

    }
    saveTask(task:Task){
      this.http.post(this.urlTask,task);
    }
    updateTask(task:Task){
      this.http.put(this.urlTask,task);
    }
    deleteTask(id:number){
      this.http.delete(this.urlTask + "/" + id);
    }

  }


}
