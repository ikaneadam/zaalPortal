import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Speler} from "../models/Speler.model";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./httpService";
import {Team} from "../models/Team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getTeams(zaalSessieUUID: string): Observable<Team[]>{
    return this.http.get<Team[]>(`${this.host}/api/zaalsessies/${zaalSessieUUID}/teams`)
  }

  public getTeam(zaalSessieUUID: string, teamdUUID: string): Observable<Team>{
    return this.http.get<Team>(`${this.host}/api/zaalsessies/${zaalSessieUUID}/teams/${teamdUUID}`)
  }

  public createTeam(zaalSessieUUID: string, teamPayload: {name: string, spelers: Speler[]}): Observable<Team>{
    return this.http.post<Team>(`${this.host}/api/zaalsessies/${zaalSessieUUID}/teams`, teamPayload)
  }
}
