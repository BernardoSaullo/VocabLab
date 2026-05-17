import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterLink } from '@angular/router';
import { LogoComponent } from "../../../shared/components/logo/logo.component";
import { BaseContainerComponent } from "../../../shared/components/base-container/base-container.component";

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RouterLink,
    LogoComponent,
    BaseContainerComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  agreeToTerms: boolean = false;
}
