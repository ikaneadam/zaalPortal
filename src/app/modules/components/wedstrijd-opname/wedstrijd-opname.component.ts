import {Component, ViewChild} from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";
import {ActivatedRoute} from "@angular/router";
import {ZaalsessieService} from "../../../shared/services/zaalsessie.service";
import {Zaalsessie} from "../../../shared/models/Zaalsessie.model";
import {Team} from "../../../shared/models/Team.model";
import {ChartComponent} from "ng-apexcharts";

@Component({
  selector: 'app-wedstrijd-opname',
  templateUrl: './wedstrijd-opname.component.html',
  styleUrls: ['./wedstrijd-opname.component.css']
})
export class WedstrijdOpnameComponent {
  public zaalsessie: Zaalsessie | any;
  public thuisTeam: Team | any
  public uitTeam: Team | any

  constructor(private headerService: HeaderService, private zaalsessieService: ZaalsessieService, private route: ActivatedRoute) {
    headerService.setHeaderText("Wedstrijd opnemen")
  }

  ngOnInit(){
    this.route.params.subscribe((params: any)=>{
      const zaalsessieUUID = params['id'];
      this.getZaalsessie(zaalsessieUUID)
    });
  }

  bestaatAlMan(team: Team){
    if (this.thuisTeam?.UUID === team.UUID){
        return true
    }

    if (this.uitTeam?.UUID === team.UUID){
      return true
    }
    return false
  }


  getSelectableTeams(){
    let selectableTeams = this.zaalsessie?.teams
    selectableTeams = selectableTeams.filter((team: any)=> {return team.UUID !== this.uitTeam?.UUID;});
    selectableTeams = selectableTeams.filter((team: any)=> {return team.UUID !== this.thuisTeam?.UUID;});

    return selectableTeams
  }

  getZaalsessie(zaalsessieUUID: string){
    this.zaalsessieService.getZaalSessie(zaalsessieUUID).subscribe((zaalsessie: Zaalsessie)=>{
      this.zaalsessie = zaalsessie
    })
  }

  startWedstrijd() {

  }
}
