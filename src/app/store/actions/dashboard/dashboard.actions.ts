import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
	LoadDashboards = '[Dashboard] Load Dashboards',
	LoadDashboardsSuccess = '[Dashboard] Load Dashboards Success',
	LoadDashboardsFailure = '[Dashboard] Load Dashboards Failure',
}

export class LoadDashboards implements Action {
	readonly type = DashboardActionTypes.LoadDashboards;
}

export class LoadDashboardsSuccess implements Action {
	readonly type = DashboardActionTypes.LoadDashboardsSuccess;
	constructor(public payload: any) {}
}

export class LoadDashboardsFailure implements Action {
	readonly type = DashboardActionTypes.LoadDashboardsFailure;
	constructor(public payload: { error: any }) {}
}

export type DashboardActions =
	| LoadDashboards
	| LoadDashboardsSuccess
	| LoadDashboardsFailure;
