import {
	Component,
	OnInit,
	HostBinding,
	Input,
	ChangeDetectionStrategy
} from '@angular/core';

@Component({
	selector: 'm-menu-section',
	templateUrl: './menu-section.component.html',
	styleUrls: ['../aside-left.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSectionComponent implements OnInit {
	Tenant:any;
	@Input() item: any;

	@HostBinding('class') classes = 'm-menu__section';

	constructor() {this.Tenant="XYZ"}

	ngOnInit(): void {}
}
