import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angTest';
  constructor(){
    this.username = "";
  }

  addUser(){
    if(this.username != ''){
      this.names.push(this.username);
      console.log(this.names);
    }
  }

  sendMessage() {
    // Operations here prior to resetting value...
    this.username = ''
  }

  username:string;
  names:string[] = [];

}
