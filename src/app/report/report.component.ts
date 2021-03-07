import { Component, OnInit } from '@angular/core';
// import {GraficoModel} from "../Model/grafico.model";
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  Value:number | undefined;
  Color:string | undefined;
  Size:string | undefined;
  Legend:string | undefined;

  // Input() List: Array<GraficoModel>;

  public Total=0;
  public MaxHeight= 160;

  constructor() { }

  ngOnInit(): void {
  //   this.MontarGrafico();
  // }

  // MontarGrafico(){
  //   this.List.forEach(element => {
  //     this.Total += element.Value;
  //   });

  //   this.List.forEach(element => {
  //     element.Size = Math.round((element.Value*this.MaxHeight)/this.Total) + '%';
  //   });
  // }
  }
}