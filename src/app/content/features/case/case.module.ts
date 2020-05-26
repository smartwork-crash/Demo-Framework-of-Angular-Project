import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseComponent } from './case.component';
import { CaseCreateComponent } from './case-create/case-create.component';
import { CaseViewComponent } from './case-view/case-view.component';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
			{
				path: '',
				component: CaseComponent
			}
		])
  ],
  declarations: [CaseComponent, CaseCreateComponent, CaseViewComponent, CaseEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CaseModule { }
