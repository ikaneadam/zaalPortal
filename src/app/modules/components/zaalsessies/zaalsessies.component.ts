import { Component } from '@angular/core';
import {HeaderService} from "../../../shared/services/header.service";

@Component({
  selector: 'app-zaalsessies',
  templateUrl: './zaalsessies.component.html',
  styleUrls: ['./zaalsessies.component.css']
})
export class ZaalsessiesComponent {
  constructor(headerService: HeaderService) {
    headerService.setHeaderText("zaalsessies")
  }

  ngOnInit(): void {
  }
}
