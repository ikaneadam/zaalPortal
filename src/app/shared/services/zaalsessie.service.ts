import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../models/Team.model";
import {Speler} from "../models/Speler.model";
import {HttpService} from "./httpService";
import {Zaalsessie} from "../models/Zaalsessie.model";

@Injectable({
  providedIn: 'root'
})
export class ZaalsessieService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getZaalSessies(): Observable<Zaalsessie[]>{
    return this.http.get<Zaalsessie[]>(`${this.host}/api/zaalsessies`)
  }

  public getZaalSessie(zaalSessieUUID: string): Observable<Zaalsessie>{
    return this.http.get<Zaalsessie>(`${this.host}/api/zaalsessies/${zaalSessieUUID}`)
  }

  public createZaalSessie(zaalSessiePayload: {name: string}): Observable<Zaalsessie>{
    return this.http.post<Zaalsessie>(`${this.host}/api/zaalsessies`, zaalSessiePayload)
  }
}
