import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../shared/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl:string='http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks?_embed=subtasks`)
  }

  getTask(id:string):Observable<Task>{
    return this.http.get<Task>(`${this.baseUrl}/tasks/${id}?_embed=subtasks`)
  }

  postTask(task:Task):Observable<Task>{
    return this.http.post<Task>(`${this.baseUrl}/tasks`,task)
  }

  removeTask(id:string){
    return this.http.delete(`${this.baseUrl}/tasks/${id}`)
  }

  /* subtasks */

  postStask(stask:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/subtasks`,stask)
  }

  completeStask(id:string,status:number=2){
    return this.http.patch(`${this.baseUrl}/subtasks/${id}`, {status})
  }

  removeStask(id:string){
    return this.http.delete(`${this.baseUrl}/subtasks/${id}`)
  }
}
