import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../../shared/interfaces/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  private currentRoute:string=''
  public users = signal<User[]>([])

  constructor(
    private userService:UserService,
    private router:Router
    ){
    this.currentRoute = this.router.url
  }


  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next:r=>{
        this.users.set(r)
      }
    })
  }

  onRegister(){
    this.router.navigate([`${this.currentRoute}/register`])
  }

  onRemoveUser(id:string){
    this.userService.removeUser(id).subscribe({
      next:r=>{
        this.getUsers()
      }
    })
  }
}
