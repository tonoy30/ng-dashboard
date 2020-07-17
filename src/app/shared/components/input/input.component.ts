import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
	constructor() {}
	email = new FormControl('', [Validators.required, Validators.email]);

	ngOnInit(): void {}

	getErrorMessage() {
		if (this.email.hasError('required')) {
			return 'You must enter a value';
		}

		return this.email.hasError('email') ? 'Not a valid email' : '';
	}
}
