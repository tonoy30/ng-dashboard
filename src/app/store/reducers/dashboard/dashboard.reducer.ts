import { Action } from '@ngrx/store';
import { DashboardActionTypes } from '../../actions/dashboard/dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

// tslint:disable-next-line: no-empty-interface
export interface DashboardState {
	loading: boolean;
	data: any[];
	error: {
		name: string;
		message: string;
		status?: string;
	};
}

export const initialState: DashboardState = {
	loading: false,
	data: undefined,
	error: undefined,
};

export function DashboardReducer(
	state = initialState,
	action: Action
): DashboardState {
	switch (action.type) {
		case DashboardActionTypes.LoadDashboards:
			return {
				...state,
				loading: false,
			};
		case DashboardActionTypes.LoadDashboardsSuccess:
			return {
				loading: true,
				// @ts-ignore
				data: action.payload,
				error: undefined,
			};
		case DashboardActionTypes.LoadDashboardsFailure:
			return {
				loading: false,
				data: undefined,
				error: {
					// @ts-ignore
					...action.payload.error,
				},
			};

		default:
			return state;
	}
}
