import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Zaalsessie} from "../models/Zaalsessie.model";
import {Team} from "../models/Team.model";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./httpService";
import {Wedstrijd} from "../models/Wedstrijd.model";
import {Goal} from "../models/Goal.model";

@Injectable({
  providedIn: 'root'
})
export class WedstrijdService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getWedstrijden(zaalSessieUUID: string): Observable<Wedstrijd[]>{
    return this.http.get<Wedstrijd[]>(`${this.host}/api/zaalsessies/${zaalSessieUUID}/wedstrijden`)
  }

  public getWedstrijd(zaalSessieUUID: string, wedstrijdUUID: string): Observable<Wedstrijd>{
    return this.http.get<Wedstrijd>(`${this.host}/api/zaalsessies/${zaalSessieUUID}`)
  }

  public createWedstrijd(zaalSessieUUID: string, wedstrijdPayload: {thuisClubUUID: string, uitClubUUID: string}): Observable<Wedstrijd> {
    return this.http.post<Wedstrijd>(`${this.host}/api/zaalsessies/${zaalSessieUUID}/wedstrijden`, wedstrijdPayload)
  }

  public addGoalToWedstrijd(wedstrijdUUID: string, wedstrijdPayload: {goal: Goal, goalType: 'thuis' | 'uit'}): Observable<Wedstrijd> {
    return this.http.post<Wedstrijd>(`${this.host}/api/wedstrijden/${wedstrijdUUID}/goal`, wedstrijdPayload)
  }

  public endWedstrijd(wedstrijdUUID: string): Observable<Team[]> {
    return this.http.post<Team[]>(`${this.host}/api/wedstrijden/${wedstrijdUUID}/beeindig`, {})
  }
}
