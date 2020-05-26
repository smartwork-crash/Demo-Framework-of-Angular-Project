import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuSectionComponent } from './aside/menu-section/menu-section.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { CoreModule } from '../../core/core.module';
import { UserProfileComponent } from './header/topbar/user-profile/user-profile.component';
import { SearchDropdownComponent } from './header/topbar/search-dropdown/search-dropdown.component';
import { NotificationComponent } from './header/topbar/notification/notification.component';
import { SearchDefaultComponent } from './header/topbar/search-default/search-default.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { MessengerComponent } from './header/topbar/messenger/notification.component'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule, MatTabsModule, MatButtonModule, MatTooltipModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FormLayoutComponent } from './form-layout/form-layout.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
		wheelSpeed: 1,        
		swipeEasing: true  ,       
		suppressScrollX:false,     
		suppressScrollY: false, 
		wheelPropagation: false,     
		useBothWheelAxes: false,   
		minScrollbarLength: 2,  
		maxScrollbarLength: 10,  
		scrollXMarginOffset: 0  
};

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		BrandComponent,
		ScrollTopComponent,
		// topbar components
		TopbarComponent,
		UserProfileComponent,
		SearchDropdownComponent,
		NotificationComponent,
		MessengerComponent,
		// aside left menu components
		AsideLeftComponent,
		MenuSectionComponent,

		// horizontal menu components

		// aside right component

		SearchDefaultComponent,

		HeaderSearchComponent,

		FormLayoutComponent,

	],
	exports: [
		ScrollTopComponent,
		HeaderComponent,
		FooterComponent,
		BrandComponent,

		// topbar components
		TopbarComponent,
		UserProfileComponent,
		SearchDropdownComponent,
		NotificationComponent,
		MessengerComponent,
		// aside left menu components
		AsideLeftComponent,
		// MenuSectionComponent,

		// horizontal menu components

		// aside right component
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	imports: [
		CommonModule,
		RouterModule,
		CoreModule,
		PerfectScrollbarModule,
		NgbModule,
		FormsModule,
		MatProgressBarModule,
		MatTabsModule,
		MaterialModule,
		// ListTimelineModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule.forChild(),
		LoadingBarModule.forRoot(),
	]
})
export class LayoutModule {}
