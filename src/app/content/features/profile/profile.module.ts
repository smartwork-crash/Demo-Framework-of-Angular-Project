import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: ProfileComponent
			}
		])
  ],
  declarations: [ProfileComponent, ViewComponent, EditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
