import { Component } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private location:LocationStrategy
  ){}

  userForm = this.fb.group({
    id:[uuidv4()],
    name:['', [Validators.required]],
    status:[true],
  })

  get name(){ return this.userForm.get('name')}

  onRegisterNewUser(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    const {name,status,id} = this.userForm.getRawValue()
    this.userService.postUser({id:id!, name:name!, status:status!}).subscribe({
      next:r=>{
        this.onBack()
      }
    })
  }

  onBack(){
    this.location.back()
  }
}
