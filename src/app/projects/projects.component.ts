import { Component, OnInit } from "@angular/core";
import Repo from "./repo";
import { repoService } from "./repo.service";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  repos: Array<Repo> = [];
  constructor(private service: repoService) {}

  ngOnInit(): void {
    this.service.getRepos().then((response) => {
      response.data.forEach((repository: Repo) => {
        if ((repository.fork !== true) || (repository.name == "Jarvide")) {
          this.repos.push(repository);
        }
      });
    });
    // sort repostires by star count
    this.repos.sort((a, b) => a.stargazers_count - b.stargazers_count);
  }
}
