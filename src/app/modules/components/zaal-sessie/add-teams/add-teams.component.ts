import {Component, Inject} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamService} from "../../../../shared/services/team.service";
import {Speler} from "../../../../shared/models/Speler.model";
import {SpelerService} from "../../../../shared/services/speler.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent {
  teamNameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  matcher = new MyErrorStateMatcher();
  public spelers: Speler[] | undefined
  public selectedSpelers = []

  constructor(
    public dialogRef: MatDialogRef<AddTeamsComponent>,
    private teamService: TeamService,
    private spelerService: SpelerService,
    @Inject(MAT_DIALOG_DATA) public zaalSessieUUID: any
  ) {}

  ngOnInit(){
    this.getSpelers()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createTeam(){
    if(!this.teamNameFormControl.valid || this.teamNameFormControl.getRawValue()?.length === 0 || this.selectedSpelers.length === 0){
      return
    }
    const teamCreatePayload = {name: this.teamNameFormControl.getRawValue(), spelers: this.parseSpelers(this.selectedSpelers)}
    this.teamService.createTeam(this.zaalSessieUUID.zaalSessieUUID, teamCreatePayload).subscribe(()=>{
      this.dialogRef.close();
    })
  }

  private getSpelers() {
    this.spelerService.getSpelers().subscribe((spelers: Speler[])=>{
      this.spelers = spelers
    })
  }

  parseSpelers(spelers: Speler[]){
    return spelers.map(spelers => Object.assign(spelers, {UUID: spelers.uuid}));
  }

}
