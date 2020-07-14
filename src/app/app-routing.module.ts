import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./features/features.module').then(
				(mod) => mod.FeaturesModule
			),
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
