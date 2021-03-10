import { Component, OnInit } from '@angular/core';
import { RolesService } from '../role.service';
import  { Router, ActivatedRoute } from '@angular/router';



import{
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexStroke,
  ApexNonAxisChartSeries,
} from "ng-apexcharts";




export type chartOptionsComparison = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  };



var $primary = "#975AFF",
  $success = "#40C057",
  $info = "#2F8BE6",
  $warning = "#F77E17",
  $danger = "#F55252",
  $label_color_light = "#E6EAEE";
var themeColors = [$primary, $warning, $success, $danger, $info];

@Component({
  selector: 'app-date-range-picker-overview-example',
  templateUrl: './date-range-picker-overview-example.component.html',
  styleUrls: ['./date-range-picker-overview-example.component.css']
})
export class DateRangePickerOverviewExampleComponent implements OnInit {
  barChartOptions: any;
  data={
    name:"",
    type:"",
    data:"",
    dateList:""
  }

  name:string | undefined;
  type:string | undefined;
  
  dateList:string | undefined;

constructor(private user_roles: RolesService,private route:Router,private activatedroute:ActivatedRoute){}

  ngOnInit(): void {

    
    this.barChartOptions = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      series: [{
        name: "Sale",
        data: [10, 41, 35, 51, 49, 62, 69, 19, 148,88,75,100],
      }],
      title: {
        text: 'Sales-Order Trend by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#F5F5F5', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','oct','nov','dec'],
      },
      yaxis: {
        tickAmount: 5,
      }
    }
    
  }

  updateSeries(){
    
  }


}

  

