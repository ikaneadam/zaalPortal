import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ZaalsessieService} from "../../../../shared/services/zaalsessie.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-zaal-sessie',
  templateUrl: './create-zaal-sessie.component.html',
  styleUrls: ['./create-zaal-sessie.component.css']
})
export class CreateZaalSessieComponent {
  zaalSessieFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<CreateZaalSessieComponent>,
    private zaalsessieService: ZaalsessieService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  createZaalSessie(){
    if(!this.zaalSessieFormControl.valid && this.zaalSessieFormControl.getRawValue() === null){
      return
    }
    console.log(this.zaalSessieFormControl.getRawValue())
    // @ts-ignore
    this.zaalsessieService.createZaalSessie({ name: this.zaalSessieFormControl.getRawValue() }).subscribe(()=>{
      this.dialogRef.close();
    })
  }
}
