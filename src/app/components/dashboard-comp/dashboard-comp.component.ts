import { Post } from './../../constants/posts';
import { User } from './../../constants/users';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteServiceService } from '../../services/route-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard-comp',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatCardModule , DatePipe, RouterLinkActive],
  templateUrl: './dashboard-comp.component.html',
  styleUrl: './dashboard-comp.component.scss'
})
export class DashboardCompComponent implements OnInit{
  
  posts: Post[] = [];
  // users: User[] = [];

  constructor(private mastersrv: RouteServiceService) {}

  ngOnInit(): void {
    this.mastersrv.getPost().subscribe(
      (res : Post[]) =>
    {
      this.posts = res;
    });
  }

}
