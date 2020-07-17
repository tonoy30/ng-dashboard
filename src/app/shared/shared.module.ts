import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
	declarations: [AreaComponent, CardComponent, InputComponent],
	imports: [
		CommonModule,
		HighchartsChartModule,
		ReactiveFormsModule,
		MaterialModule,
	],
	exports: [AreaComponent, CardComponent, InputComponent],
})
export class SharedModule {}
