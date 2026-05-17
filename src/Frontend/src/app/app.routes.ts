import { Routes } from '@angular/router';
import { BaseContainerComponent } from './shared/components/base-container/base-container.component';
import { HomeComponent } from './modules/home/home.component';
import { InputIconComponent } from './shared/components/inputs/input-icon/input-icon.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';

export const routes: Routes = [

	{ path: '', component: MainLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  },
	{ path: 'test-component', component: InputIconComponent },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'reset-password', component: ResetPasswordComponent },
];
