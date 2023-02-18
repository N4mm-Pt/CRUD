import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: UserService){}

  respdata : any;

  ProdceedLogin(logindata:any){
    if(logindata.valid){
      this.service.ProdceedLogin(logindata.value).subscribe(item => {
        this.respdata.item
        console.log(this.respdata)
      });
    }
    console.log(logindata.value);
  }
}
