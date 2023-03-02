import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerText = ''

  constructor(headerService: HeaderService) {
    headerService.getHeaderText().subscribe((updatedHeaderText)=>{
      this.headerText = updatedHeaderText;
    })
  }

  ngOnInit(): void {
  }
}
