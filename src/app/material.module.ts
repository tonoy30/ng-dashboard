import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatDividerModule,
		MatMenuModule,
		MatListModule,
		MatCardModule,
		DragDropModule,
		MatFormFieldModule,
		MatTableModule,
		MatCheckboxModule,
		MatSelectModule,
		MatDialogModule,
	],
})
export class MaterialModule {}
