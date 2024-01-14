import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../entitiy/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'], // Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class LoginPageComponent {
  email: any;
  password: any;
  goBack() {
    this.router.navigate(['/home']);
  }
  users!: User[];
  constructor(private router: Router, private httpService: UserService) {} // Inject Router in the constructor
  ngOnInit() {
    console.log('ngOnInit() called');
    this.httpService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
  onSubmit() {
    const user = this.users.find(
      (u) =>
        u.mail.toString() === this.email.toString() &&
        u.password.toString() === this.password.toString()
    );
    if (user) {
      console.log('Email and password pair exist in users');
      localStorage.setItem('currentUser', user.id.toString());
      this.router.navigate(['/activity']);
    } else {
      console.log('Email and password pair do not exist in users');
    }
  }
}
