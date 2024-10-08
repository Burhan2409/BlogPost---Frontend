import { Component, NgModule, OnInit, Pipe } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteServiceService } from '../../services/route-service.service';
import { User } from '../../constants/users';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent implements OnInit{

  data =  true;
  UserData: User[] = [];
  errorMessage: string = '';

  loginObj ={
    "UserId":0,
    "UserName":"",
    "UserPassword":""
  };
 
  onLogin(){
 
    let data = {
      "UserId": 0,
      "UserName":this.loginObj.UserName,
      "UserPassword": this.loginObj.UserPassword
    }
    console.log(data);
 
    this.http.post("https://localhost:44330/api/Users/User", data).subscribe((res:any)=>{
 
      if(res.title == "Not Found"){
        alert("Wrong Credentials");
      }else{
        localStorage.setItem('userId', res.userId);
        localStorage.setItem('userName',res.userName);
        this.routesrv.navigate(["/dashboard"])
 
      }
    })
  }

  constructor(private http: HttpClient, private routesrv: Router) {}

  ngOnInit(): void {
    // this.routesrv.getUsers().subscribe(
    //   (data : User[]) => {
    //     this.UserData = data;
    // });

    
  }
  
  // jumpPage(form : NgForm) : void {

  //   const formdata = form.value;
  //   const enteredName = formdata.name;
  //   const enteredPassword = formdata.password;

  //   const user = this.UserData.find( res => 
  //     res.UserId == enteredName &&
  //     res.UserPassword == enteredPassword
  //    );

  //   if(this.data) 
  //   {
  //     console.log("Success")
  //     this.route.navigate(["dashboard"]);
  //   }
  // }

//   login(event: Event) {
// const form= event.target as HTMLFormElement;
// const username=(form.elements.namedItem('name') as HTMLInputElement).value;
// const password=(form.elements.namedItem('password') as HTMLInputElement).value;
// console.log(username, password);

//     this.routesrv.getUsers(username, password).subscribe(
//       success=> {
//         if(success!=null){
//           this.route.navigate(['/dashboard']);
//         }
//       }
//     );
//   }
 
}
