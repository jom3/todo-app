import { Injectable } from '@angular/core';
import { User} from '../../shared/interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string='http://localhost:3000'
  users:User[]=[];

  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }

  postUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`,user)
  }

  removeUser(id:string){
    return this.http.delete(`${this.baseUrl}/users/${id}`)
  }
}
