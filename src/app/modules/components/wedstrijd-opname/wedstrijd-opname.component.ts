import {Component, ViewChild} from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ZaalsessieService} from "../../../shared/services/zaalsessie.service";
import {Zaalsessie} from "../../../shared/models/Zaalsessie.model";
import {Team} from "../../../shared/models/Team.model";
import {ChartComponent} from "ng-apexcharts";
import {Wedstrijd} from "../../../shared/models/Wedstrijd.model";
import {WedstrijdService} from "../../../shared/services/wedstrijd.service";
import {MatDialog} from "@angular/material/dialog";
import {SelectSpelerComponent} from "./select-speler/select-speler.component";

@Component({
  selector: 'app-wedstrijd-opname',
  templateUrl: './wedstrijd-opname.component.html',
  styleUrls: ['./wedstrijd-opname.component.css']
})
export class WedstrijdOpnameComponent {
  public wedstrijd: Wedstrijd | any;
  private currentWedstrijdUUID = ''

  constructor(private headerService: HeaderService, private wedstrijdService: WedstrijdService, private route: ActivatedRoute, private router: Router,public dialog: MatDialog) {
    headerService.setHeaderText("Wedstrijd opnemen")
  }

  getStand(){
    const thuisGoals = this.wedstrijd?.thuisGoals?.length
    const uitGoals = this.wedstrijd?.uitGoals?.length
    return `${thuisGoals} - ${uitGoals}`
  }

  closeWedstrijd(){
    this.wedstrijdService.endWedstrijd(this.wedstrijd?.UUID).subscribe(()=>{
      this.router.navigate(['/zaalsessie', this.wedstrijd.zaalSessie.UUID])
    })
  }

  ngOnInit(){
    this.route.params.subscribe((params: any)=>{
      const wedstrijdUUID = params['id'];
      this.currentWedstrijdUUID = wedstrijdUUID
      this.getWedstrijd(wedstrijdUUID)
    });
  }

  getWedstrijd(wedstrijdUUID: string){
    this.wedstrijdService.getWedstrijd(wedstrijdUUID).subscribe((wedstrijd: Wedstrijd)=>{
      this.wedstrijd = wedstrijd
    })
  }
// wedstrijdUUID: string, wedstrijdPayload: {goal: Goal, goalType: 'thuis' | 'uit'}

  uitGoal(){
    const dialogRef = this.dialog.open(SelectSpelerComponent, {
      maxWidth: '90vw',
      height: '60%',
      width: '90vw',
      data:{
        team: this.wedstrijd.uitClub,
        wedstrijd: this.wedstrijd,
        goalType: "uit"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getWedstrijd(this.currentWedstrijdUUID)
    });
  }

  thuisGoal(){
    const dialogRef = this.dialog.open(SelectSpelerComponent, {
      maxWidth: '90vw',
      height: '60%',
      width: '90vw',
      data:{
        team: this.wedstrijd.thuisClub,
        wedstrijd: this.wedstrijd,
        goalType: "thuis"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getWedstrijd(this.currentWedstrijdUUID)
    });
  }

}
