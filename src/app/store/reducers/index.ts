import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer,
} from '@ngrx/store';
import {
	DashboardReducer,
	DashboardState,
} from './dashboard/dashboard.reducer';
import { ErrorState, ErrorReducer } from './error/error.reducer';
import { environment } from '../../../environments/environment';

// tslint:disable-next-line: no-empty-interface
export interface AppState {
	dashboard: DashboardState;
	error: ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
	dashboard: DashboardReducer,
	error: ErrorReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
