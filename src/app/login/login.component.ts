import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private service: UserService,private route: Router){}

  respdata : any;

  ProdceedLogin(logindata:any){
    if(logindata.valid){
      localStorage.setItem('token',logindata.value);
      this.route.navigate(['home']);
    }
    else{
      alert("login failed");
    }
  }

  RedirectRegister(){
    this.route.navigate(['access/register']);
  }
}
