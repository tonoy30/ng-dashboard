import { Action } from '@ngrx/store';
import { Task } from './../../../core/models/task';

export enum TasksActionTypes {
	LoadTasks = '[Tasks] Load Tasks',
	LoadTasksSuccess = '[Tasks] Load Tasks Success',
	LoadTasksFailure = '[Tasks] Load Tasks Failure',
}

export class LoadTasks implements Action {
	readonly type = TasksActionTypes.LoadTasks;
}

export class LoadTasksSuccess implements Action {
	readonly type = TasksActionTypes.LoadTasksSuccess;
	constructor(public payload: { data: Task }) {}
}

export class LoadTasksFailure implements Action {
	readonly type = TasksActionTypes.LoadTasksFailure;
	constructor(public payload: { error: any }) {}
}

export type TasksActions = LoadTasks | LoadTasksSuccess | LoadTasksFailure;
