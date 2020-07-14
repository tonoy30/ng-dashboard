import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';

@NgModule({
	declarations: [AreaComponent, CardComponent],
	imports: [CommonModule, HighchartsChartModule],
	exports: [AreaComponent, CardComponent],
})
export class SharedModule {}
