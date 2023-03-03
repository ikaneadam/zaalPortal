import { Component } from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";
import {Speler} from "../../../shared/models/Speler.model";
import {SpelerService} from "../../../shared/services/speler.service";
import {getImgUrl} from "../../../shared/helpers/getImgUrl";
import {Router} from "@angular/router";

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.css']
})

export class SpelersComponent {
  public spelers: Speler[] | undefined;

  public displayedColumns: string[] = ['pf', 'name', 'goals'];

  constructor(headerService: HeaderService, private spelerService: SpelerService, private router: Router) {
    headerService.setHeaderText("spelers")
  }

  ngOnInit(){
    this.getSpelers();
  }

  private getSpelers(){
    this.spelerService.getSpelers().subscribe((spelers: Speler[])=>{
      this.spelers = spelers
    })

  }

  public getImage(imageUrl: string){
    return getImgUrl(imageUrl)
  }

  redirectToPlayer(speler: any){
    this.router.navigate(['/speler', speler.uuid])
  }
}
