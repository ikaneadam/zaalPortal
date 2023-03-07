import {Component, Inject} from '@angular/core';
import {Team} from "../../../../shared/models/Team.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Zaalsessie} from "../../../../shared/models/Zaalsessie.model";
import {WedstrijdService} from "../../../../shared/services/wedstrijd.service";
import {Wedstrijd} from "../../../../shared/models/Wedstrijd.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-wedstrijd',
  templateUrl: './create-wedstrijd.component.html',
  styleUrls: ['./create-wedstrijd.component.css']
})
export class CreateWedstrijdComponent {
  public thuisTeam: Team | any
  public uitTeam: Team | any

  constructor(
    public dialogRef: MatDialogRef<CreateWedstrijdComponent>,
    private wedstrijdService: WedstrijdService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public zaalsessie: {zaalsessie: Zaalsessie}
  ) {
  }

  getSelectableTeams(){
    let selectableTeams = this.zaalsessie?.zaalsessie.teams
    selectableTeams = selectableTeams.filter((team: any)=> {return team.UUID !== this.uitTeam?.UUID;});
    selectableTeams = selectableTeams.filter((team: any)=> {return team.UUID !== this.thuisTeam?.UUID;});

    return selectableTeams
  }

  public onNoClick(){
    this.dialogRef.close();
  }

  public createWedstrijd(){
    if (this.thuisTeam === undefined || this.uitTeam === undefined){
      return
    }

    const createWedstrijdPayload = {thuisClubUUID: this.thuisTeam?.UUID, uitClubUUID: this.uitTeam?.UUID}
    this.wedstrijdService.createWedstrijd(this.zaalsessie.zaalsessie.UUID, createWedstrijdPayload).subscribe((wedstrijd: Wedstrijd)=>{
      this.dialogRef.close();
      this.router.navigate(['/wedstrijdOpname', wedstrijd.UUID])
    })

  }
}
