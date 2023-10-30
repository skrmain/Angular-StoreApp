import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  ngOnInit() {}
  error: any;

  loginUser() {
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (result) => {
        alert('Login Success');
        this.authService.saveToken(result.data.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loginForm.get('password')?.reset();
        // this.error = err.error;
      },
    });
  }
}
