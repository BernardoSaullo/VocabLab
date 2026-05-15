import { Routes } from '@angular/router';
import { BaseContainerComponent } from './shared/components/base-container/base-container.component';
import { HomeComponent } from './modules/home/home.component';
import { InputIconComponent } from './shared/components/inputs/input-icon/input-icon.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
export const routes: Routes = [

	{ path: '', component: MainLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  },
	{ path: 'test-component', component: InputIconComponent },
];
