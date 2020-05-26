import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntakeComponent } from './intake.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: IntakeComponent
			}
		])
  ],
  declarations: [IntakeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntakeModule { }
