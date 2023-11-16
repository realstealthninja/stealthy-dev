import { Component } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import arduino from 'highlight.js/lib/languages/arduino';
hljs.registerLanguage('arduino', arduino);


document.addEventListener('DOMContentLoaded', (event) => {
  hljs.highlightAll();
});

@Component({
  selector: 'app-my-time-at-gbot',
  templateUrl: './my-time-at-gbot.component.html',
  styleUrls: ['./my-time-at-gbot.component.css']
})
export class MyTimeAtGbotComponent {

}
