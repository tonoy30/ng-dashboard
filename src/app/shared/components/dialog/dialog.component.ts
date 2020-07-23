import { Task } from './../../../core/models/task';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
	constructor(
		public dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Task
	) {}
	onNoClick(): void {
		this.dialogRef.close();
	}
}
