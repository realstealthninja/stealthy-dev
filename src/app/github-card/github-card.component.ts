import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.css']
})
export class GithubCardComponent {
  @Input() image!: string;
  @Input() link!: string;
  @Input() button!: string;
  /**
   * onClick funtion for the card's button
   */
  onClick() {
    location.href = this.button;
  }
}
