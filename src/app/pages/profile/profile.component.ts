import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(private _userService: UserService, private router: Router) {}

  user?: User;

  ngOnInit() {
    this._userService.getUserDetail().subscribe({
      next: (result) => {
        console.log('R ', result);

        this.user = result.data.user;
      },
      // error: (err) => {
      //   this._userService.removeToken();
      //   this.router.navigate(['/login']);
      // }
    });
  }
}
