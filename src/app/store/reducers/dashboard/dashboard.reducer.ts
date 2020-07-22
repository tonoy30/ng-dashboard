import { Action } from '@ngrx/store';
import { DashboardActionTypes } from '../../actions/dashboard/dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

// tslint:disable-next-line: no-empty-interface
export interface DashboardState {
	data: any[];
}

export const initialState: DashboardState = {
	data: [],
};

export function DashboardReducer(
	state = initialState,
	action: Action
): DashboardState {
	switch (action.type) {
		case DashboardActionTypes.LoadDashboardsSuccess:
			// @ts-ignore
			return action.payload;
		default:
			return state;
	}
}
