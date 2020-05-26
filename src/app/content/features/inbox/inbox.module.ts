import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: InboxComponent
			}
		])
  ],
  declarations: [InboxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InboxModule { }
