import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FeaturesModule,
		SharedModule,
		CoreModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
