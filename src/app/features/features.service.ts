import { Card } from './../core/models/card';
import { Series } from './../core/models/series';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FeaturesService {
	constructor() {}
	getAreaChartData(): Series[] {
		return [
			{
				name: 'Asia',
				data: [502, 635, 809, 947, 1402, 3634, 5268],
			},
			{
				name: 'Africa',
				data: [106, 107, 111, 133, 221, 767, 1766],
			},
			{
				name: 'Europe',
				data: [163, 203, 276, 408, 547, 729, 628],
			},
			{
				name: 'America',
				data: [18, 31, 54, 156, 339, 818, 1201],
			},
			{
				name: 'Oceania',
				data: [2, 2, 2, 6, 13, 30, 46],
			},
		];
	}
	getCardData(): Card {
		return {
			label: '',
			total: '',
			percentage: '',
			data: [
				{
					name: 'Data',
					data: [106, 107, 111, 133, 221, 767, 1766],
				},
			],
		};
	}
}
