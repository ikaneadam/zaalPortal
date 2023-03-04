import { Component } from '@angular/core';
import {Zaalsessie} from "../../../shared/models/Zaalsessie.model";
import {HeaderService} from "../../../shared/services/header.service";
import {ActivatedRoute} from "@angular/router";
import {ZaalsessieService} from "../../../shared/services/zaalsessie.service";
import {MatDialog} from "@angular/material/dialog";
import {AddTeamsComponent} from "./add-teams/add-teams.component";
import {Team} from "../../../shared/models/Team.model";

@Component({
  selector: 'app-zaal-sessie',
  templateUrl: './zaal-sessie.component.html',
  styleUrls: ['./zaal-sessie.component.css']
})
export class ZaalSessieComponent {
  public zaalsessie: Zaalsessie | any;
  private currentZaalsessieUUID = ''
  public teams: Team[] = []
  public displayedColumns = ['Team', 'wins', 'loses', 'draws', 'punten']

  constructor(private headerService: HeaderService, private zaalsessieService: ZaalsessieService,private route: ActivatedRoute,public dialog: MatDialog) {
    headerService.setHeaderText("")
  }

  ngOnInit(){
    this.route.params.subscribe((params: any)=>{
      const zaalsessieUUID = params['id'];
      this.currentZaalsessieUUID = zaalsessieUUID
      this.getZaalSessie(zaalsessieUUID)
    });
  }

  private getZaalSessie(zaalsessieUUID: string) {
    this.zaalsessieService.getZaalSessie(zaalsessieUUID).subscribe((zaalsessie: Zaalsessie)=>{
      this.zaalsessie = zaalsessie
      this.headerService.setHeaderText(zaalsessie.name)
      this.setTeams()
    })
  }

  public createTeam(){
    const dialogRef = this.dialog.open(AddTeamsComponent, {
      maxWidth: '90vw',
      height: '60%',
      width: '90vw',
      data:{
        zaalSessieUUID: this.currentZaalsessieUUID}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getZaalSessie(this.currentZaalsessieUUID)
      this.setTeams()
    });
  }

  public timeGame(){

  }

  calculatePunten(team: any){
    const winsPunten = Number(team.wins) * 3
    const drawsPunten = Number(team.draws) * 1
    return winsPunten + drawsPunten
  }

  private comparePunten(a: any, b: any) {
    return a.punten - b.punten;
  }

  public setTeams() {
    let teams = this.zaalsessie.teams

    teams = teams.map((team: any) => Object.assign(team, {punten: this.calculatePunten(team)}));
    teams = teams.sort(this.comparePunten)
    this.teams = teams
  }
}
