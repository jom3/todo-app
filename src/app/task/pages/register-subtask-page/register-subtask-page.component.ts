import { Component, signal } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../../user/services/user.service';
import { User } from '../../../shared/interfaces/users';

@Component({
  selector: 'app-register-subtask-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-subtask-page.component.html',
  styleUrl: './register-subtask-page.component.css'
})
export class RegisterSubtaskPageComponent {

  staskForm:FormGroup;

  public users = signal<User[]>([]);
  private id:string=''

  constructor(
    private ac:ActivatedRoute,
    private fb:FormBuilder,
    private taskService:TaskService,
    private userService:UserService,
    private location:LocationStrategy
  ){
    this.id = this.ac.snapshot.paramMap.get('id')!;
    this.staskForm = this.fb.group({
      id:[uuidv4()],
      name:['', [Validators.required]],
      user:['',[Validators.required]],
      taskId:[this.id],
      status:[true],
    })
    this.getUser()
  }

  get name(){return this.staskForm.get('name')}
  get user(){return this.staskForm.get('user')}

  getUser(){
    this.userService.getUsers().subscribe({
      next:r=>{
        this.users.set(r)
      }
    })
  }

  onRegisterNewStask(){
    if(this.staskForm.invalid){
      this.staskForm.markAllAsTouched();
      return;
    }
    const stask = this.staskForm.getRawValue()
    this.taskService.postStask(stask).subscribe({
      next:r=>{
        this.onBack()
      }
    })
  }

  onBack(){
    this.location.back()
  }

}
