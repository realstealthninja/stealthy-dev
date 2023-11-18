import { Component } from '@angular/core';
import { HighlightJsModule } from 'ngx-highlight-js';

@Component({
  selector: 'app-syntax-highlight',
  templateUrl: './syntax-highlight.component.html',
  styleUrls: ['./syntax-highlight.component.css'],
  standalone: true,
  imports: [HighlightJsModule]
})
export class SyntaxHighlightComponent { }
