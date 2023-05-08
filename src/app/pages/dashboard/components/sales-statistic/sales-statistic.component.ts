import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { OrderService } from '@app/services/api/order.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-sales-statistic',
  templateUrl: './sales-statistic.component.html',
  styleUrls: ['./sales-statistic.component.scss'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
})
export class SalesStatisticComponent implements OnInit {

  isLoading: boolean = true;
  chart: any = [];
  statisticsMap: Map<String, Number> = new Map;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private orderService: OrderService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.initStatistics();
  }

  onSelectedDate(range: FormGroup): void {
    this.isLoading = true;
    this.chart?.destroy();

    const startDate = this.convertToISOString(range.get('start')?.value);
    const endDate = this.convertToISOString(range.get('end')?.value);

    this.orderService.getStatistic$(startDate, endDate).subscribe((response: Map<String, Number>) => {
      this.isLoading = false;
      this.statisticsMap = response;

      const orderDate = Object.keys(response);
      const orderTotal = Object.values(response);

      this.drawChart(orderDate, orderTotal);
    });
  }

  private initStatistics(): void {
    this.orderService.getStatistic$().subscribe((response: Map<String, Number>) => {
      this.statisticsMap = response;
      this.isLoading = false;

      const orderDate = Object.keys(response);
      const orderTotal = Object.values(response);

      this.drawChart(orderDate, orderTotal);
    });
  }

  private drawChart(orderDate: any, orderTotal: any): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: orderDate,
        datasets: [{
          data: orderTotal,
          borderColor: '#3e95cd',
          fill: false,
          label: 'Sales for the selected range',
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderWidth: 3,
        }]
      }
    });
  }

  private convertToISOString(date: any): string {
    const standardizedDate = new Date(date);
    return new Date(Date.UTC(
      standardizedDate.getFullYear(),
      standardizedDate.getMonth(),
      standardizedDate.getDate(),
      standardizedDate.getHours(),
      standardizedDate.getMinutes(),
      standardizedDate.getSeconds()))
      .toISOString();
  }

}
