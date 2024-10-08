import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../constants/users';
import { Post } from '../constants/posts';
import { ThumbPosition } from '@angular/material/slider/testing';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private http : HttpClient) { }

  // getUsers() : Observable<User[]> {
  //   return this.http.post<User[]>("https://localhost:44330/api/Users/users");
  //   // return this.http.post<any>("https://localhost:44330/api/Users/users",users);
  // }

  getPost() : Observable<Post[]> {
    return this.http.get<Post[]>("https://localhost:44330/api/Posts/posts")
  }

  // getUsers(userName: string, userPassword: string): Observable<any> {
  //   const data={
  //       userName: userName,
  //       userPassword: userPassword
  //   }
  //   return this.http.post<any>("https://localhost:44330/api/Users/users", data);
  // }

  private baseUrl = 'https://localhost:44330/api/posts'

  // updatePost(postId: number, post: Post): Observable<Post> {
  //   return this.http.put<Post>(`${this.baseUrl}/${postId}`, post);
  // }

  getUsers(data : any) 
  {
    return this.http.post("https://localhost:44330/api/Users/User", data);
  }  

  deleteUser(postId : number) : Observable<void>
  {
    return this.http.delete<void>(`https://localhost:44330/api/Posts/${postId}`);
  }

  addPost(data : any)
  {
    return this.http.post("https://localhost:44330/api/Posts/addPost", data)
  }

  getPostByUserId(userId : number)
  {
    return this.http.get(`https://localhost:44330/api/Posts/${userId}`)
  }

  updatePost(data : any)
  {
    return this.http.put("https://localhost:44330/api/Posts/updateFeed", data)
  }
}