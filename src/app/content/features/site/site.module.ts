import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteComponent } from './site.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: SiteComponent
			}
		])
  ],
  declarations: [SiteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SiteModule { }
