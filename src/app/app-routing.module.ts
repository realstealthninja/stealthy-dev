import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { LinksComponent } from "./links/links.component";
import { BlogsComponent } from "./writing/blogs.component";
import { WhyStealthyDevComponent } from "./writing/blogs/why-stealthy-dev/why-stealthy-dev.component";
import { MyTimeAtGbotComponent } from "./writing/blogs/my-time-at-gbot/my-time-at-gbot.component";
import { AGrandOldOakComponent } from "./writing/poetry/a-grand-old-oak/a-grand-old-oak.component";
import { BigBrightStarComponent } from "./writing/poetry/big-bright-star/big-bright-star.component";
import { HouseOnAHillComponent } from "./writing/poetry/house-on-a-hill/house-on-a-hill.component";
import { DefaultComponent } from "./writing/default/default.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent, title: "about - stealthy dev" },
  { path: "projects", component: ProjectsComponent, title: "projects - stealthy dev" },
  { path: "contact", component: LinksComponent, title: "contact - stealthy dev " },
  {
    path: "writing",
    title: "writing - stealthy dev",
    component: BlogsComponent,
    children: [
      { path: "why-stealthy-dev", component: WhyStealthyDevComponent, title: "why stealthy dev - blog" },
      { path: "my-time-at-gbot", component: MyTimeAtGbotComponent, title: "robotics an art worth the money - blog" },
      { path: "a-grand-old-oak", component: AGrandOldOakComponent, title: "grand old oak - poetry" },
      { path: "big-bright-star", component: BigBrightStarComponent, title: "big bright star - poetry" },
      { path: "house-on-a-hill", component: HouseOnAHillComponent, title: "house on a hill - poetry" },
      { path: "", component: DefaultComponent}
    ]
  },
  { path: "**", component: PageNotFoundComponent, title: "404 page found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled"})],
  exports: [RouterModule],
})

export class AppRoutingModule { }
