import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface AppState {
	name: 'tonoy';
}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
