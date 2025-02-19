import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   title = 'frontend';
    login = { username: '', password: '' };
    constructor (private router: Router, private authService: AuthService)
    {}

    onLogin(): void {
      this.authService.login(this.login.username, this.login.password)
    }
}
