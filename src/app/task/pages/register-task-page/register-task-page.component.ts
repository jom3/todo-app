import { Component } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register-task-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-task-page.component.html',
  styleUrl: './register-task-page.component.css'
})
export class RegisterTaskPageComponent {

  taskForm:FormGroup;


  constructor(
    private fb:FormBuilder,
    private taskService:TaskService,
    private location:LocationStrategy
  ){
    this.taskForm = this.fb.group({
      id:[uuidv4()],
      name:['', [Validators.required]],
      status:[true],
    })
  }

  get name(){return this.taskForm.get('name')}

  onRegisterNewTask(){
    if(this.taskForm.invalid){
      this.taskForm.markAllAsTouched();
      return;
    }
    const {name,status,id} = this.taskForm.getRawValue()
    this.taskService.postTask({id:id!, name:name!, status:status!}).subscribe({
      next:r=>{
        this.onBack()
      }
    })
  }

  onBack(){
    this.location.back()
  }
}
