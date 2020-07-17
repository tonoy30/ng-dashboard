import { Component, OnInit } from '@angular/core';
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-form-builder',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
	todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

	done = [
		'Get up',
		'Brush teeth',
		'Take a shower',
		'Check e-mail',
		'Walk dog',
	];
	constructor() {}

	ngOnInit(): void {}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
	}
}
