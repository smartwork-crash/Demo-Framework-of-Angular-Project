import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule,ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxPermissionsModule } from 'ngx-permissions';

import { LayoutModule } from './content/layout/layout.module';
import { CoreModule } from './core/core.module';
import { AclService } from './core/services/acl.service';
import { LayoutConfigService } from './core/services/layout-config.service';
import { MenuConfigService } from './core/services/menu-config.service';
import { PageConfigService } from './core/services/page-config.service';
import { UserService } from './core/services/user.service';
import { UtilsService } from './core/services/utils.service';
import { ClassInitService } from './core/services/class-init.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { MaterialModule } from './material.module'
import { MessengerService } from './core/services/messenger.service';

import { PerfectScrollbarModule,PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LayoutConfigStorageService } from './core/services/layout-config-storage.service';
import { LogsService } from './core/services/logs.service';
import { QuickSearchService } from './core/services/quick-search.service';
import { HeaderService } from './core/services/layout/header.service';
import { MenuAsideService } from './core/services/layout/menu-aside.service';
import { LayoutRefService } from './core/services/layout/layout-ref.service';
import { SplashScreenService } from './core/services/splash-screen.service';
import { ErrorService } from './core/errors/error.service';
import { GlobalErrorHandler } from './core/errors/globalerrorhandler';
import { LoggingService } from './core/errors/logging.service';
import { NotificationService } from './core/errors/notification.service';
import { ServerErrorInterceptor } from './core/errors/service-error-interceptor';

import 'hammerjs';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	 suppressScrollX: true
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LayoutModule,
		PerfectScrollbarModule,
		MaterialModule,
		CoreModule,
		OverlayModule,
		NgxPermissionsModule.forRoot(),
		NgbModule.forRoot(),
		TranslateModule.forRoot(),
	],
	providers: [
		AclService,
		LayoutConfigService,
		LayoutConfigStorageService,
		LayoutRefService,
		MenuConfigService,
		PageConfigService,
		UserService,
		UtilsService,
		ClassInitService,
		MessengerService,
		LogsService,
		// core error file
		ErrorService,
		LoggingService,
		NotificationService,
		{ provide: ErrorHandler, useClass: GlobalErrorHandler },
		{ provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },

		QuickSearchService,
		SplashScreenService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},

		// template services
		HeaderService,
		MenuAsideService,
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		}
	],
	bootstrap: [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
