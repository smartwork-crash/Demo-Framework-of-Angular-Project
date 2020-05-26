// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			aside: {
				self: {},
				items: [
					{
						title: 'Home',
						desc: 'Home',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/home.png',
						page: '/home',
						//badge: {type: 'm-badge--danger', value: '2'},
					},
					{
						title: 'Dashboard',
						desc: 'Case Information',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/home.png',
						page: '',
					},
					{
						title: 'Intake',
						desc: 'Enrollment Task',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/intake.png',
						page: '/intake',
					},
					{
						title: 'Cases',
						desc: 'Cases Info',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/case.png',
						page: '/case',
					},
					{
						title: 'Patients',
						desc: 'Patient Info',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/patient.png',
						page: '/patient/view',
					},
					{
						title: 'HCP',
						desc: 'HCP info',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/hcp.png',
						page: '/hcp/view',
					},
					{
						title: 'Sites',
						desc: 'external sites',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/site.png',
						page: '/site',
					},
					{
						title: 'Inbox',
						desc: 'inbox message',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/mail.png',
						page: '/message',
					},
					{
						title: 'Chat Rooms',
						desc: 'Patient care chats',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/chat.png',
						page: '/chat',
					},
					{
						title: 'Calender',
						desc: 'scheduler',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/calendar.png',
						page: '/calender',
					},
					{
						title: 'Help Center',
						desc: 'Help Center for app',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/helpcenter.png',
						page: '/help',
					},
					{
						title: 'Settings',
						desc: 'Settings for site',
						root: true,
						icon: './assets/cassia/default/media/img/logo/sidebar-icon/service.png',
						page: '/setting',
					}
					
				]
			}
		};
	}
}
