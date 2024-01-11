import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "This string is interpolated:";
  clientName = "ChadCaleb";
  appliedCSS = "blue";
  notAppliedCSS = false;
  myColor = "green";


  clickCount = 0
  clickMe() {
    this.clickCount++;
  }

showData($event: any) {
  console.log("button is allowed");
  if ($event) {
    console.log($event.target);
    console.log($event.target.value);
  }
} 


}
