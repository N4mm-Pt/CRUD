import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
 
  title = 'CRUD';
  isMenuVisible = true;

  constructor(private route : Router){}

  ngDoCheck(): void {
    const currentroute = this.route.url;
    if(currentroute=='/login'){
      this.isMenuVisible = false;
    }
    else{
      this.isMenuVisible = true;
    }
  }
  
}
