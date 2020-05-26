import {
	Component,
	OnInit,
	HostBinding,
	HostListener,
	Input,
	ChangeDetectionStrategy
} from '@angular/core';

@Component({
	selector: 'm-messenger',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerComponent implements OnInit {
	@HostBinding('class')
	// tslint:disable-next-line:max-line-length
	classes = 'm-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width';

	@HostBinding('attr.m-dropdown-toggle') attrDropdownToggle = 'click';
	@HostBinding('attr.m-dropdown-persistent') attrDropdownPersisten = 'true';

	@Input() animateShake: any;
	@Input() animateBlink: any;
	 avatar: string = './assets/cassia/default/media/img/logo/sidebar-icon/chat.png';


	constructor() {
	// animate icon shake and dot blink
	setInterval(() => {
		this.animateShake = 'm-animate-shake';
		this.animateBlink = 'm-animate-blink';
	}, 3000);
	setInterval(() => (this.animateShake = this.animateBlink = ''), 6000);
}



	ngOnInit(): void {}
}
