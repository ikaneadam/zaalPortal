import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Team} from "../../../../shared/models/Team.model";

@Component({
  selector: 'app-displayteam',
  templateUrl: './displayteam.component.html',
  styleUrls: ['./displayteam.component.css']
})
export class DisplayteamComponent {

  constructor(
    public dialogRef: MatDialogRef<DisplayteamComponent>,
    @Inject(MAT_DIALOG_DATA) public team: {team: Team}
  ) {
  }

  public getSpelers(){
    return this.team.team.spelers
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
