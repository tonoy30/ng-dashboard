import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
	selector: 'app-widget-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
	Highcharts = Highcharts;
	chartOptions: any = {};
	constructor() {}

	ngOnInit() {
		this.chartOptions = {
			chart: {
				type: 'bar',
			},
			title: {
				text: 'RANDOM DATA',
			},
			subtitle: {
				text: null,
			},
			credits: {
				enabled: false,
			},
			exporting: {
				enabled: false,
			},
			xAxis: {
				categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
				title: {
					text: null,
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Population (millions)',
					align: 'high',
				},
				labels: {
					overflow: 'justify',
				},
			},
			tooltip: {
				valueSuffix: ' millions',
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true,
					},
				},
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: 80,
				floating: true,
				borderWidth: 1,
				backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor ||
					'#FFFFFF',
				shadow: true,
			},
			series: [
				{
					name: 'Year 1800',
					data: [107, 31, 635, 203, 2],
				},
				{
					name: 'Year 1900',
					data: [133, 156, 947, 408, 6],
				},
				{
					name: 'Year 2000',
					data: [814, 841, 3714, 727, 31],
				},
				{
					name: 'Year 2016',
					data: [1216, 1001, 4436, 738, 40],
				},
			],
		};

		HC_exporting(Highcharts);

		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}
}
