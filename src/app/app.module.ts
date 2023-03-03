import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './modules/components/home/home.component';
import { SpelersComponent } from './modules/components/spelers/spelers.component';
import { ZaalsessiesComponent } from './modules/components/zaalsessies/zaalsessies.component';
import { WedstrijdOpnameComponent } from './modules/components/wedstrijd-opname/wedstrijd-opname.component';
import { ZaalSessieComponent } from './modules/components/zaal-sessie/zaal-sessie.component';
import { SpelerComponent } from './modules/components/speler/speler.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgApexchartsModule} from "ng-apexcharts";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpelersComponent,
    ZaalsessiesComponent,
    WedstrijdOpnameComponent,
    ZaalSessieComponent,
    SpelerComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        AppRoutingModule,
        FontAwesomeModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        NgApexchartsModule,
        MatTableModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
