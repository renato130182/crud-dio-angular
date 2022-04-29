import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'https://sheet.best/api/sheets/f0fa9fd2-5e01-4671-b7e8-dc98f3585350';
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {}

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.userURL)
  }

  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.userURL,user,this.httpOptions);
  }

  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.userURL}/id/${id}`);
  }

  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.userURL}/id/${id}`,user,this.httpOptions);
  }

  getUserByID(id:String):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.userURL}/id/${id}`)
  } 
}
