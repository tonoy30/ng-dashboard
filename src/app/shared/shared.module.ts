import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { InputComponent } from './components/input/input.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './widgets/table/table.component';

@NgModule({
	declarations: [
		AreaComponent,
		CardComponent,
		InputComponent,
		PieComponent,
		TableComponent,
	],
	imports: [
		CommonModule,
		HighchartsChartModule,
		ReactiveFormsModule,
		MaterialModule,
	],
	exports: [
		AreaComponent,
		CardComponent,
		InputComponent,
		PieComponent,
		TableComponent,
	],
})
export class SharedModule {}
