import * as DashboardActions from './dashboard.actions';

describe('Dashboard', () => {
	it('should create an instance', () => {
		expect(new DashboardActions.LoadDashboards()).toBeTruthy();
	});
});
