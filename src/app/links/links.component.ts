import { Component } from '@angular/core';

interface SocialMedia{
    username: string;
    link: string;
    icon: string;
}

const links: Array<SocialMedia> = [
   {
      username: "stealthninja",
      link: "https://www.youtube.com/channel/UCRBu1hybrrioa8hZc5_Ggig",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8b/YouTube_dark_icon_%282017%29.svg"
   },
   {
    username: "@realstealthninja",
    link: "https://www.instagram.com/realstealthninja/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
   },
   {
    username: "Rstealthninja",
    link: "https://twitter.com/RStealthninja",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
  }
   
];

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent {
 links = links;
}
