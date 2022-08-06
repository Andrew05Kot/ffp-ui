import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { OrderService } from '../../../_services/api/order.service';

@Component({
    selector: 'app-sales-statistic',
    templateUrl: './sales-statistic.component.html',
    styleUrls: ['./sales-statistic.component.scss']
})
export class SalesStatisticComponent implements OnInit {

    chart: any = [];
    statisticsMap: Map<String, Number> = new Map;

    constructor(private orderService: OrderService) {
        Chart.register(...registerables);
    }

    ngOnInit(): void {
        this.dravChart();
    }

    private dravChart(): void {
        this.orderService.getStatistic$().subscribe((response: Map<String, Number>) => {
            this.statisticsMap = response;
            const orderDate = Object.keys(response);
            const orderTotal = Object.values(response);

            this.chart = new Chart('canvas', {
                type: 'line',
                data: {
                    labels: orderDate,
                    datasets: [{
                        data: orderTotal,
                        borderColor: '#3e95cd',
                        fill: false,
                        label: 'Sales for the year',
                        backgroundColor: 'rgba(93, 175, 89, 0.1)',
                        borderWidth: 3,
                    }]
                }
            });
        });
    }

}
