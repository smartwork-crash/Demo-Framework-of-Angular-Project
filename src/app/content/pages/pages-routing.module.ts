import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProfileComponent } from './header/profile/profile.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';

const routes: Routes = [
	
	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: '',
				loadChildren: '../features/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'header/actions',
				component: ActionComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'patient',
				loadChildren: '../features/patient/patient.module#PatientModule'
			},
			{
				path: 'hcp',
				loadChildren: '../features/hcp/hcp.module#HcpModule'
			},
			{
				path: 'case',
				loadChildren: '../features/case/case.module#CaseModule'
			},
			{
				path: 'intake',
				loadChildren: '../features/intake/intake.module#IntakeModule'
			},
			{
				path: 'home',
				loadChildren: '../features/home/home.module#HomeModule'
			},
			{
				path: 'site',
				loadChildren: '../features/site/site.module#SiteModule'
			},
			{
				path: 'message',
				loadChildren: '../features/inbox/inbox.module#InboxModule'
			}
		]
	},
	{
		path: 'authorize',
		// canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		},
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
