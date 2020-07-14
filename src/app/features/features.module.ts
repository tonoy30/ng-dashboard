import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		FeaturesRoutingModule,
		MaterialModule,
		SharedModule,
		FlexLayoutModule,
	],
	exports: [DashboardComponent],
})
export class FeaturesModule {}
