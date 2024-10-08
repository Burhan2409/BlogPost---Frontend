import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteServiceService } from '../../services/route-service.service';
import { User } from '../../constants/users';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive, MatCardModule, CommonModule, FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit{

  constructor(private routesrv : RouteServiceService) {
    const now = new Date();

    this.loginDate = now.toISOString().split('T')[0];
    this.loginTime = now.toTimeString().split(" ")[0];
  }
  
  userlist: User[] = [];
  dummyData: string | null = localStorage.getItem('userName');
  loginTime : string =""; 
  loginDate : string =""; 
  

  ngOnInit(): void {
    // this.profileData();
    console.log(this.dummyData);

  }

  // profileData() {
  //   this.routesrv.getUsers().subscribe((res) =>{
  //     this.userlist = res;
  //     console.log(res);
  //   })
  // }




}
