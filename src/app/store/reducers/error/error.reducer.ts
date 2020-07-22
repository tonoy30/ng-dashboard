import { Action } from '@ngrx/store';

export const errorFeatureKey = 'error';

export interface ErrorState {
	type: string;
	message: string;
	code?: string;
}

export const initialState: ErrorState = {
	type: null,
	message: null,
};

export function ErrorReducer(state = initialState, action: Action): ErrorState {
	switch (action.type) {
		default:
			return state;
	}
}
