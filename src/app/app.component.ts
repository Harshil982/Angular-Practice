import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JS';
  data = "Hello";
  HarshilYourNotification = "";
  firstName = "";
  count = 0;
  getData()
  {
    return "Fall back to safe zone"
  };
  checkJSON = [{name : "Harshil",surname : "Rajput"},{name : "XYZ",surname : "PQR"}]
  getNotification(noti:any)
  {
    this.HarshilYourNotification = noti
  }
  getInputData(name:string)
  {
    this.firstName = name;
    console.log(name)
  }
  // Counter
  Increament()
  {
    this.count = this.count + 1;
  }
  Decreament()
  {
    if(this.count > 0)
    {
    this.count = this.count - 1;
    }
    else
    {
      alert("Min Limit Reached")
    }
  }

  // If-else Practice

  show = 'NO'
  display = true;
  handleDisplay()
  {
    this.display = !this.display;
  }

  color = "yellow"

  handleColor(choice:string)
  {
    this.color = choice;
  }
}