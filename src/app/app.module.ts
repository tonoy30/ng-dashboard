import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
			},
		}),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
