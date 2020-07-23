import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
	DashboardReducer,
	DashboardState,
} from './dashboard/dashboard.reducer';
import { TaskState, TaskReducer } from './tasks/tasks.reducer';

export interface AppState {
	dashboard: DashboardState;
	task: TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
	dashboard: DashboardReducer,
	task: TaskReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
