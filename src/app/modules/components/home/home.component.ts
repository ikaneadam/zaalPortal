import { Component } from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(headerService: HeaderService) {
    headerService.setHeaderText("Salam ailokom")
  }



  ngOnInit(): void {
  }
}
