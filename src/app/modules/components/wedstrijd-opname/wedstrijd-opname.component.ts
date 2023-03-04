import { Component } from '@angular/core';
import {Speler} from "../../../shared/models/Speler.model";
import {HeaderService} from "../../../shared/services/header.service";
import {SpelerService} from "../../../shared/services/speler.service";
import {ActivatedRoute} from "@angular/router";
import {ZaalsessieService} from "../../../shared/services/zaalsessie.service";
import {Zaalsessie} from "../../../shared/models/Zaalsessie.model";

@Component({
  selector: 'app-wedstrijd-opname',
  templateUrl: './wedstrijd-opname.component.html',
  styleUrls: ['./wedstrijd-opname.component.css']
})
export class WedstrijdOpnameComponent {
  public zaalsessie: Zaalsessie | any;

  constructor(private headerService: HeaderService, private zaalsessieService: ZaalsessieService, private route: ActivatedRoute) {
    headerService.setHeaderText("Wedstrijd opnemen")
  }

  ngOnInit(){
    this.route.params.subscribe((params: any)=>{
      const zaalsessieUUID = params['id'];
      this.getZaalsessie(zaalsessieUUID)
    });

  }

  getZaalsessie(zaalsessieUUID: string){
    this.zaalsessieService.getZaalSessie(zaalsessieUUID).subscribe((zaalsessie: Zaalsessie)=>{
      this.zaalsessie = zaalsessie
    })
  }
}
