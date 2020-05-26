import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    children: [
     
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      permissions: {
        except: 'ADMIN'
      }
    },
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
 
]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
