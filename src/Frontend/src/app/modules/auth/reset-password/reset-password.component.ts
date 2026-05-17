import { Component } from '@angular/core';
import { BaseContainerComponent } from "../../../shared/components/base-container/base-container.component";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  imports: [
    BaseContainerComponent,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterLink
],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email!: string;
}
