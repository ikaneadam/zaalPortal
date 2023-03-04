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
import { HammerModule } from '@angular/platform-browser';
import { CreateZaalSessieComponent } from './modules/components/zaalsessies/create-zaal-sessie/create-zaal-sessie.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import { AddTeamsComponent } from './modules/components/zaal-sessie/add-teams/add-teams.component';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

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
    FooterComponent,
    CreateZaalSessieComponent,
    AddTeamsComponent
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
      HammerModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
