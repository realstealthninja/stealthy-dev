import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  date = new Date(Date.now());

  age: number = this.date.getFullYear() - 2007;


}
