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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: LinksComponent },
  {
    path: "writing",
    component: BlogsComponent,
    children: [
      { path: "why-stealthy-dev", component: WhyStealthyDevComponent },
      { path: "my-time-at-gbot", component: MyTimeAtGbotComponent },
      { path: "a-grand-old-oak", component: AGrandOldOakComponent },
      { path: "big-bright-star", component: BigBrightStarComponent },
      { path: "house-on-a-hill", component: HouseOnAHillComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
