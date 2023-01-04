import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() shortParagraph!: string;
  @Input() image!: string;
  @Input() icon!: string;
  @Input() footer!: string;
  @Input() link!: string;



  onClick() {
    location.href = this.link;
  }
}
