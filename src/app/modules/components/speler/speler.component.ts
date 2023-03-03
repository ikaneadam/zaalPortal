import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import {HeaderService} from "../../../shared/services/header.service";
import {SpelerService} from "../../../shared/services/speler.service";
import {Speler} from "../../../shared/models/Speler.model";
import {ActivatedRoute} from "@angular/router";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  fill: string[];
  dataLabels: any;
  markers: string;
  labels: any;
};

@Component({
  selector: 'app-speler',
  templateUrl: './speler.component.html',
  styleUrls: ['./speler.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpelerComponent implements OnInit {
  @ViewChild("chart", { static: true }) chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  public faSpinner = faSpinner
  public speler: Speler | undefined;

  constructor(private headerService: HeaderService, private spelerService: SpelerService,private route: ActivatedRoute) {
    headerService.setHeaderText("spelers")
  }

  ngOnInit(){
    this.createEmptyDougnutChart()
    // this.createDougnutChart()
    this.route.params.subscribe((params: any)=>{
      const spelerUUID = params['id'];
      console.log(spelerUUID)
      this.getPlayer(spelerUUID)

    });

  }

  getPlayer(spelerUUID: string){
    this.spelerService.getSpeler(spelerUUID).subscribe((speler: Speler)=>{
      console.log(speler)
      this.speler = speler
      this.headerService.setHeaderText(speler.name)
      this.createDougnutChart(Number(speler.wins), Number(speler.draws), Number(speler.loses))
    })
  }

  createEmptyDougnutChart(){
    this.chartOptions = {
      chart: {
        type: "donut"
      },
      series: [1],
      labels: ['ga spelen man'],
      colors: ['#f0f0f0'],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  createDougnutChart(wins: number, draws: number, loses: number){
    this.chartOptions = {
      series: [wins,draws,loses],
      chart: {
        type: "donut"
      },
      fill: {
        colors: ['#12ff41', '#d4d9d5', '#ff5736']
      },
      labels: ["wins", "draws", "loses"],
      dataLabels: {
        style: {
          colors: ['#12ff41', '#d4d9d5', '#ff5736']
        }
      },
      markers: {
        colors: ['#12ff41', '#d4d9d5', '#ff5736']
      },
      colors:['#12ff41', '#d4d9d5', '#ff5736'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
