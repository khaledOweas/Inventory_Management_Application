import { Component, Input, OnInit } from "@angular/core";
import { getCSSVariableValue } from "../../../../../kt/_utils";
import { NgClass } from "@angular/common";
import { KeeniconComponent } from "src/app/_metronic/shared/keenicon/keenicon.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { DropdownMenu1Component } from "../../../dropdown-menus/dropdown-menu1/dropdown-menu1.component";
@Component({
  selector: "app-mixed-widget7",
  standalone: true, // Generated Stand-Alone Component
  templateUrl: "./mixed-widget7.component.html",
  imports: [NgClass, KeeniconComponent, NgApexchartsModule, DropdownMenu1Component]
})
export class MixedWidget7Component implements OnInit {
  @Input() chartColor: string = "";
  @Input() chartHeight: string;
  chartOptions: any = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
}

function getChartOptions(chartHeight: string, chartColor: string) {
  const baseColor = getCSSVariableValue("--bs-" + chartColor);
  const lightColor = getCSSVariableValue("--bs-" + chartColor + "-light");
  const labelColor = getCSSVariableValue("--bs-gray-700");

  return {
    series: [74],
    chart: {
      fontFamily: "inherit",
      height: chartHeight,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%"
        },
        dataLabels: {
          name: {
            show: false,
            fontWeight: "700"
          },
          value: {
            color: labelColor,
            fontSize: "30px",
            fontWeight: "700",
            offsetY: 12,
            show: true,
            formatter: function (val: number) {
              return val + "%";
            }
          }
        },
        track: {
          background: lightColor,
          strokeWidth: "100%"
        }
      }
    },
    colors: [baseColor],
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };
}
