import { Component, OnInit } from '@angular/core';

import { Series } from './../../core/models/series';
import { FeaturesService } from './../features.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	areaChartData: Series[];
	constructor(private service: FeaturesService) {}

	ngOnInit(): void {
		this.areaChartData = this.service.getAreaChartData();
	}
}
