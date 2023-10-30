import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-signup',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  ngOnInit() {}
  error: any;

  signupUser() {
    this.authService.registerUser(this.signupForm.value).subscribe(
      (result) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
