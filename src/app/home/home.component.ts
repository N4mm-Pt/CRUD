import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
  headername = "Angular Project";
  salary = 2023;
  isDisabled = true;
  colorname = "green";
  classname = "headclass";

  stylevalue={"color":"yellow","font-size":"45px"}

  colors = ['green','red','yellow','black']

  Functionclick(name : string){
    return alert(name);
  }
}
