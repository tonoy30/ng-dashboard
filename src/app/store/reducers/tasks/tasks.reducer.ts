import { Action } from '@ngrx/store';

export const tasksFeatureKey = 'tasks';

export interface TaskState {
	id: string;
	title: string;
	createdBy: string;
	createdAt: string;
	description: string;
	moveToTodo: boolean;
}

export const initialState: TaskState = {
	id: undefined,
	title: undefined,
	createdBy: undefined,
	createdAt: undefined,
	description: undefined,
	moveToTodo: undefined,
};

export function TaskReducer(state = initialState, action: Action): TaskState {
	switch (action.type) {
		default:
			return state;
	}
}
