import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: SettingComponent
			}
		])
  ],
  declarations: [SettingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingModule { }
