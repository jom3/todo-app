import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../shared/interfaces/task';

@Component({
  selector: 'app-task-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-details-page.component.html',
  styleUrl: './task-details-page.component.css'
})
export class TaskDetailsPageComponent {
  public task = signal<Task>({
    id:'',
    name:'',
    status:true,
    subtasks:[]
  })
  private currentRoute:string=''
  private id:string;

  constructor(
    private ac:ActivatedRoute,
    private router:Router,
    private taskService:TaskService
  ){
    this.currentRoute = this.router.url
    this.id = this.ac.snapshot.paramMap.get('id')!;
    this.getTask()
  }

  getTask(){
    this.taskService.getTask(this.id).subscribe({
      next:r=>{
        this.task.set(r)
      }
    })
  }

  onRemoveSubtask(id:string){
   this.taskService.removeStask(id).subscribe({
    next:r=>{
      this.getTask()
    }
   })
  }

  onCompleteSubtask(id:string){
    this.taskService.completeStask(id).subscribe({
      next:r=>{
        this.getTask()
      }
    })
  }

  onRegister(){
    this.router.navigate([`${this.currentRoute}/register`])
  }
}
