import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
	},
	{
		path: 'posts',
		component: PostsComponent,
	},
	{
		path: 'tasks',
		component: TasksComponent,
	},
	{
		path: 'form-builder',
		component: FormBuilderComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FeaturesRoutingModule {}
