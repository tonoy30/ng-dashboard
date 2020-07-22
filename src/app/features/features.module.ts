import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FeaturesService } from './features.service';

@NgModule({
	declarations: [DashboardComponent, PostsComponent, FormBuilderComponent],
	imports: [
		CommonModule,
		FeaturesRoutingModule,
		MaterialModule,
		SharedModule,
		FlexLayoutModule,
		HttpClientModule,
	],
	providers: [FeaturesService],
	exports: [DashboardComponent],
})
export class FeaturesModule {}
