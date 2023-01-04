import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';
import Repo from './repo';
import { repoService } from './repo.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: Array<Repo> = [];
  constructor(private service: repoService) {}

  ngOnInit(): void {
    this.service.getRepos().then((response) => {
      this.repos = response.data;

    })
  }
}
