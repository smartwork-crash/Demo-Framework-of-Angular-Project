import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelpCenterComponent } from './help-center.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: HelpCenterComponent
			}
		])
  ],
  declarations: [HelpCenterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpCenterModule { }
