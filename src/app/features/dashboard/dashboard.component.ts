import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Series } from './../../core/models/series';
import { FeaturesService } from './../features.service';
import { AppState } from './../../store/reducers/index';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	areaChartData: Series[];
	constructor(
		private service: FeaturesService,
		private store: Store<AppState>
	) {
		store.subscribe();
	}

	ngOnInit(): void {
		this.areaChartData = this.service.getAreaChartData();
	}
}
