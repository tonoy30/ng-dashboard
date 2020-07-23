import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Series } from './../../core/models/series';
import { FeaturesService } from './../features.service';
import { AppState } from './../../store/reducers/index';
import {
	LoadDashboards,
	LoadDashboardsSuccess,
	LoadDashboardsFailure,
} from './../../store/actions/dashboard/dashboard.actions';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';

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
		this.service
			.getUsers()
			.pipe(
				tap((user) => {
					this.store.dispatch(new LoadDashboardsSuccess(user));
				})
			)
			.subscribe(
				noop,
				(error) => {
					const { name, status, message } = error;
					this.store.dispatch(
						new LoadDashboardsFailure({
							error: { name, message, status },
						})
					);
				},
				() => this.store.dispatch(new LoadDashboards())
			);
	}
}
