import { Component } from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";
import {Zaalsessie} from "../../../shared/models/Zaalsessie.model";
import 'hammerjs';
import {ZaalsessieService} from "../../../shared/services/zaalsessie.service";
import {CreateZaalSessieComponent} from "./create-zaal-sessie/create-zaal-sessie.component";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-zaalsessies',
  templateUrl: './zaalsessies.component.html',
  styleUrls: ['./zaalsessies.component.css']
})
export class ZaalsessiesComponent {
  public zaalSessies: Zaalsessie[] | undefined

  constructor(headerService: HeaderService, private zaalsessieService: ZaalsessieService, public dialog: MatDialog) {
    headerService.setHeaderText("zaalsessies")
  }

  ngOnInit(): void {
    this.getZaalsessies()
  }

  private getZaalsessies(){
    this.zaalsessieService.getZaalSessies().subscribe((zaalsessies: Zaalsessie[])=>{
      this.zaalSessies = zaalsessies
    })
  }

  public parseDate(date: any){
    try {
      const formatedDate = new Date(date)
      return formatedDate.toLocaleDateString("en-UK").replace(/\//g, '-');
    } catch (error){
      return "weh"
    }
  }


  openCreateZaalModal(){
    const dialogRef = this.dialog.open(CreateZaalSessieComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getZaalsessies()
    });
  }
}
