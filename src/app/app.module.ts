import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HighlightJsModule } from 'ngx-highlight-js';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CardComponent } from "./card/card.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { LinksComponent } from "./links/links.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { BlogsComponent } from './blogs/blogs.component';
import { WhyStealthyDevComponent } from './blogs/why-stealthy-dev/why-stealthy-dev.component';
import { MyTimeAtGbotComponent } from './blogs/my-time-at-gbot/my-time-at-gbot.component';
import { InabilityToCompleteComponent } from './blogs/inability-to-complete/inability-to-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProjectsComponent,
    LinksComponent,
    ContactCardComponent,
    BlogsComponent,
    WhyStealthyDevComponent,
    MyTimeAtGbotComponent,
    InabilityToCompleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HighlightJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
