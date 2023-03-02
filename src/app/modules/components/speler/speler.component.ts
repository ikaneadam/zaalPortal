import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

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

  constructor() {
  }
//['#12ff41', '#d4d9d5', '#ff5736']
  ngOnInit(){
    this.chartOptions = {
      series: [23,3,53],
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
