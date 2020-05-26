import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: ChatRoomComponent
			}
		])
  ],
  declarations: [ChatRoomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatRoomModule { }
