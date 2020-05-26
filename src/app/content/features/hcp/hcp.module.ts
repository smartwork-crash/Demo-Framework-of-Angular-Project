import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HcpComponent } from './hcp.component';
import { HcpAddComponent } from './hcp-add/hcp-add.component';
import { HcpEditComponent } from './hcp-edit/hcp-edit.component';
import { HcpViewComponent } from './hcp-view/hcp-view.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
			{
				path: '',
				component: HcpComponent
			}
		])
  ],
  declarations: [HcpComponent, HcpAddComponent, HcpEditComponent, HcpViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HcpModule { }
