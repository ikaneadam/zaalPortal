import {AppRoutes} from "./core/routing/appRouteType";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes: AppRoutes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
