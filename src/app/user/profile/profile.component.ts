import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userProfile: any;

  ngOnInit() {
    this.authService.getUserDetail().subscribe(
      (result: any) => {
        console.log('R ', result);

        this.userProfile = result.data.user;
      },
      (err) => {
        this.authService.removeToken();
        this.router.navigate(['/login']);
      }
    );
  }
}
