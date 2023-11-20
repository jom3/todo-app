import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {

  @Input({required:true}) tasks:any
  @Output() removeTask = new EventEmitter<any>();

  private currentRoute:string=''

  constructor(
    private router:Router,
    private taskService:TaskService
    ){
    this.currentRoute = this.router.url
  }

  onRegister(){
    this.router.navigate([`${this.currentRoute}/register`])
  }

  onSeeMore(id:string){
    this.router.navigate([`${this.currentRoute}/${id}`])
  }

  onRemoveTask(id:string){
    this.removeTask.emit(id)
  }
}
