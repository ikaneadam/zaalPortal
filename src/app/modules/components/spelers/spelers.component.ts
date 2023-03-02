import { Component } from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.css']
})
export class SpelersComponent {

  constructor(headerService: HeaderService) {
    headerService.setHeaderText("spelers")
  }

}
