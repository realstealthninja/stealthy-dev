import { Component, Input,  } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-text-blob',
  templateUrl: './text-blob.component.html',
  styleUrls: ['./text-blob.component.css']
})

export class TextBlobComponent {
  @Input() title!: string;
  @Input() content!: string;
  sanitizedHtml: SafeHtml = "";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get('assets/blog-text/' + this.content,
    {responseType: 'text'})
    .subscribe(data => {
      this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(data);
    })

  }
}
