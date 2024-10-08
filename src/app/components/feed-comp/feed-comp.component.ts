import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Post } from '../../constants/posts';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { RouteServiceService } from '../../services/route-service.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-feed-comp',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, RouterLink, NgIf , NgFor , FormsModule ,MatIconModule,RouterLinkActive, MatCardModule, DatePipe, MatExpansionModule],
  templateUrl: './feed-comp.component.html',
  styleUrl: './feed-comp.component.scss'
})
export class FeedCompComponent implements OnInit{
  
  posts : Post[] = [];
  modal: boolean = false;
  userId:any = localStorage.getItem('userId');
  modal2: boolean = false;
  selectedPostId:Number|null = null;
  id:any;

  constructor(private routesrv : RouteServiceService) {}

  ngOnInit(): void {
    // this.routesrv.getPost().subscribe(
    //   (res : Post[]) => {
    //     this.posts = res;
    //   })
    this.getPostsById(this.userId);
  }


  getPostsById(userId:number){
    this.routesrv.getPostByUserId(userId).subscribe((res:any)=>{
      this.posts = res;
      console.log(res);
    })
  }
  onDeletePost(postId : number) {
    this.routesrv.deleteUser(postId)
    .subscribe(() => {
      this.posts = this.posts.filter(post => post.postId !== postId );
      console.log(`Post with postId ${postId} has been deleted.`);
    });
  }

  openModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }

  onSubmit(event :Event){
    event.preventDefault();
    this.modal = false;
    const form = event.target as HTMLFormElement;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLInputElement).value;
    let newPost = {
      "postId":0,
      "userId":this.userId,
      "title":title,
      "postDescription":description
    }
 
    this.routesrv.addPost(newPost).subscribe((res)=>{
      console.log(res);
      this.getPostsById(this.userId);
    });
    
  }

  openModal2(pId:Number){
    this.modal2 = true;
    this.selectedPostId = pId;
  }
 
  closeModal2(){
    this.modal2 = false;
    this.selectedPostId = null;
  }

  // onUpdate(event:Event,postId:Number){
  //   event.preventDefault();
  //   this.modal2 = false;
  //   const form = event.target as HTMLFormElement;
  //   const title = (form.elements.namedItem('title') as HTMLInputElement).value;
  //   const description = (form.elements.namedItem('description') as HTMLInputElement).value;
  //   this.id = this.selectedPostId;
  //   let data = {
  //     "postId":this.id,
  //     "userId":localStorage.getItem('userId'),
  //     "title":title,
  //     "postDescription":description,
  //   }
  //   console.log(data);
    
  //   this.routesrv.updatePost(data).subscribe((res) =>{
  //     console.log(res);
  //   });  
  
  // }
  
}
