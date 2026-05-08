import { Routes } from '@angular/router';
import { BaseContainerComponent } from './shared/components/base-container/base-container.component';
import { HomeComponent } from './modules/home/home.component';
import { InputIconComponent } from './shared/components/inputs/input-icon/input-icon.component';
export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'test-component', component: InputIconComponent },
];
