import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
	selector: 'app-widget-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	Highcharts = Highcharts;
	chartOptions: any = {};
	constructor() {}

	ngOnInit(): void {
		this.chartOptions = {
			chart: {
				type: 'area',
			},
			title: {
				text:
					'Historic and Estimated Worldwide Population Growth by Region',
			},
			subtitle: {
				text: 'Source: Wikipedia.org',
			},
			exporting: {
				enabled: false,
			},
			credits: {
				enabled: false,
			},
			legend: {
				enabled: false,
			},
			tooltip: {
				split: true,
				outside: true,
			},
			series: [
				{
					data: [71, 78, 39, 66],
				},
			],
		};
		HC_exporting(this.Highcharts);
	}
}
