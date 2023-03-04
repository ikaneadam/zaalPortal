import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./httpService";
import {Speler} from "../models/Speler.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpelerService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getSpelers(): Observable<Speler[]>{
    return this.http.get<Speler[]>(`${this.host}/api/spelers`)
  }

  public getSpeler(spelerUUID: string): Observable<Speler>{
    return this.http.get<Speler>(`${this.host}/api/spelers/${spelerUUID}`)
  }

}
