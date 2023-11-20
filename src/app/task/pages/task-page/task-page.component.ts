import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskTableComponent } from '../../components/task-table/task-table.component';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [CommonModule, TaskTableComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent implements OnInit{

  public tasks = signal<any>([])
  private taskService = inject(TaskService)

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.taskService.getTasks().subscribe({
      next:r=>{
        this.tasks.set(r)
      }
    })
  }
  onRemoveTask(id:string){
    this.taskService.removeTask(id).subscribe({
      next:r=>{
        this.getTasks()
      }
    })
  }
}
