import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Output() toggleSideBarForMe = new EventEmitter<any>();

	constructor() {}

	ngOnInit(): void {}
	toggleSidebar() {
		this.toggleSideBarForMe.emit();
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}
}
