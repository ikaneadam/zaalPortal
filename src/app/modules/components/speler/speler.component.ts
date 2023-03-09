import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import {HeaderService} from "../../../shared/services/header.service";
import {SpelerService} from "../../../shared/services/speler.service";
import {Speler} from "../../../shared/models/Speler.model";
import {ActivatedRoute} from "@angular/router";
import {getImgUrl} from "../../../shared/helpers/getImgUrl";

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
  styleUrls: ['./speler.component.css']
})
export class SpelerComponent implements OnInit {
  @ViewChild("chart", { static: true }) chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any
  public displayedColumns: string[] = ['value'];
  public speler: Speler | any;

  constructor(private headerService: HeaderService, private spelerService: SpelerService,private route: ActivatedRoute) {
    headerService.setHeaderText("spelers")
  }

  ngOnInit(){
    this.createEmptyDougnutChart()

    this.route.params.subscribe((params: any)=>{
      const spelerUUID = params['id'];
      this.getPlayer(spelerUUID)
    });

  }

  getPlayer(spelerUUID: string){
    this.spelerService.getSpeler(spelerUUID).subscribe((speler: Speler)=>{
      this.speler = speler
      this.headerService.setHeaderText(speler.name)

      if (this.calculateSum(speler.wins, speler.draws, speler.loses) === 0) {
        return
      }

      this.createDougnutChart(Number(speler.wins), Number(speler.draws), Number(speler.loses))
    })
  }

  calculateSum(wins: string, draws:string, loses: string){
    const array1 = [Number(wins), Number(draws), Number(loses)];

    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return sumWithInitial
  }
  test(t:any){
    console.log(t)
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

  public getImage(imageUrl: any){
    return getImgUrl(imageUrl)
  }

}
