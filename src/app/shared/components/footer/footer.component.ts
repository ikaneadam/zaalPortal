import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Link} from "./link.model";
import {Router} from "@angular/router";
import {HomeComponent} from "../../../modules/components/home/home.component";
import {ZaalsessiesComponent} from "../../../modules/components/zaalsessies/zaalsessies.component";
import {ZaalSessieComponent} from "../../../modules/components/zaal-sessie/zaal-sessie.component";
import {SpelersComponent} from "../../../modules/components/spelers/spelers.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private currentRoute = ''

  constructor(private router: Router) {
    router.events.subscribe((r)=>{
      this.currentRoute = router.url
      this.setActiveLink(this.currentRoute)
    })
  }


  links: Link[] = [
    {routerLink: '', imageUrl: '../../../../assets/pictures/home-bigger.png'},
    {routerLink: '/zaalsessies', imageUrl: '../../../../assets/pictures/shoes-bigger.png'},
    {routerLink: '/spelers', imageUrl: '../../../../assets/pictures/soccer-player-bigger.png'}
    ];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  //ik weet shti code heb geen zin meer om mooi te maken
 setActiveLink(currentUrl: string){
   const routerlinks = this.links.map(links => links.routerLink)
   const indexOfActiveRoute = routerlinks.indexOf(currentUrl)
   if (indexOfActiveRoute === -1){
     this.activeLink = this.links[0]
     return
   }

   this.activeLink = this.links[indexOfActiveRoute]
 }



}
