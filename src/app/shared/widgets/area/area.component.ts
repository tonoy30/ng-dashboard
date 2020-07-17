import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Series } from './../../../core/models/series';

@Component({
	selector: 'app-widget-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
	chartOptions: any = {};
	Highcharts = Highcharts;
	@Input() data: Series[];
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
			xAxis: {
				categories: [
					'1750',
					'1800',
					'1850',
					'1900',
					'1950',
					'1999',
					'2050',
				],
				tickmarkPlacement: 'on',
				title: {
					enabled: false,
				},
			},
			yAxis: {
				title: {
					text: 'Billions',
				},
				labels: {
					formatter() {
						return this.value / 1000;
					},
				},
			},
			exporting: {
				enabled: true,
			},
			credits: {
				enabled: false,
			},
			tooltip: {
				split: true,
				valueSuffix: ' millions',
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666',
					},
				},
			},
			series: this.data,
		};
		HC_exporting(this.Highcharts);
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}
}
