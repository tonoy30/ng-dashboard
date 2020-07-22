import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
	DashboardReducer,
	DashboardState,
} from './dashboard/dashboard.reducer';

export interface AppState {
	dashboard: DashboardState;
}

export const reducers: ActionReducerMap<AppState> = {
	dashboard: DashboardReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
