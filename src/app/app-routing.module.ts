import {AppRoutes} from "./core/routing/appRouteType";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./modules/components/home/home.component";
import {ZaalsessiesComponent} from "./modules/components/zaalsessies/zaalsessies.component";
import {SpelersComponent} from "./modules/components/spelers/spelers.component";
import {ZaalSessieComponent} from "./modules/components/zaal-sessie/zaal-sessie.component";
import {SpelerComponent} from "./modules/components/speler/speler.component";
import {WedstrijdOpnameComponent} from "./modules/components/wedstrijd-opname/wedstrijd-opname.component";

export const routes: AppRoutes = [
  {path: '', component: HomeComponent},
  {path: 'zaalsessies', component: ZaalsessiesComponent},
  {path: 'zaalsessie/:id', component: ZaalSessieComponent},
  {path: 'wedstrijdOpname/:id', component: WedstrijdOpnameComponent},
  {path: 'spelers', component: SpelersComponent},
  {path: 'speler/:id', component: SpelerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
