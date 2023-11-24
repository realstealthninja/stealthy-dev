import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { LinksComponent } from "./links/links.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { WhyStealthyDevComponent } from "./blogs/why-stealthy-dev/why-stealthy-dev.component";
import { MyTimeAtGbotComponent } from "./blogs/my-time-at-gbot/my-time-at-gbot.component";
import { InabilityToCompleteComponent } from "./blogs/inability-to-complete/inability-to-complete.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: LinksComponent },
  {
    path: "blogs",
    component: BlogsComponent,
    children: [
      { path: "why-stealthy-dev", component: WhyStealthyDevComponent },
      { path: "my-time-at-gbot", component: MyTimeAtGbotComponent },
      { path: "inability-to-complete", component: InabilityToCompleteComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
