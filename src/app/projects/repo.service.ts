import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})

export class repoService {
  private url = "https://api.github.com/users/realstealthninja/repos";

  constructor() {}

  getRepos() {
    return axios.get(this.url);
  }
}
