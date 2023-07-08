import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[routeTransformer]'
})
export class RouteTransformerDirective {

  constructor(private router: Router) { }

  @HostListener('click', ['$event'])
  public onClick(event: any) {
    if (event.target.tagName === 'A') {
      this.router.navigate([event.target.getAttribute('href')]);
      event.preventDefault();
    } else {
      return;
    }
  }

};