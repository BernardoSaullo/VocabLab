import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-nav-bar',
  imports: [
    AvatarModule,
    OverlayBadgeModule,
    LogoComponent
],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
