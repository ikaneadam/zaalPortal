import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Team} from "../../../../shared/models/Team.model";
import {Speler} from "../../../../shared/models/Speler.model";
import {WedstrijdService} from "../../../../shared/services/wedstrijd.service";
import {Wedstrijd} from "../../../../shared/models/Wedstrijd.model";
import {Goal} from "../../../../shared/models/Goal.model";

@Component({
  selector: 'app-select-speler',
  templateUrl: './select-speler.component.html',
  styleUrls: ['./select-speler.component.css']
})
export class SelectSpelerComponent {

  constructor(
    public dialogRef: MatDialogRef<SelectSpelerComponent>,
    private wedstrijdService: WedstrijdService,
    @Inject(MAT_DIALOG_DATA) public team: {team: Team},
  @Inject(MAT_DIALOG_DATA) public goalType: {goalType: string},
  @Inject(MAT_DIALOG_DATA) public wedstrijd: {wedstrijd: Wedstrijd}
  ) {
  }

  public getSpelers(){
    return this.team.team.spelers
  }
  public selectSpeler(speler: Speler){
    const goal = {scoorder: speler.UUID}
    const wedstrijdPayload = {goal: goal, goalType: this.goalType.goalType}
    const wedstrijdUUID = this.wedstrijd.wedstrijd.UUID
    this.wedstrijdService.addGoalToWedstrijd(wedstrijdUUID, wedstrijdPayload).subscribe(()=>{
      this.dialogRef.close(speler);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
