import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from "../../../shared/components/logo/logo.component";


@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    LogoComponent
],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email!: string;
  password!: string;
}
