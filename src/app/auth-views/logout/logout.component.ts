import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: '../base/base.component.html',
  styleUrls: ['../base/base.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
