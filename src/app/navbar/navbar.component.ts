import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Student } from '../entitiy/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  title1!: any;
  currentUser!: any;
  student!: Student;
  constructor(private router: Router, private httpService: StudentService) {}
  ngOnInit(): void {
    // if (this.pageUrl() == '/dashboard/account') {
    //   this.title1 = 'Accounts';
    // } else if (this.pageUrl() == '/dashboard/transaction') {
    //   this.title1 = 'Transactions';
    // } else if (this.pageUrl() == '/dashboard/overview') {
    //   this.title1 = 'Dashboard';
    // } else if (this.pageUrl() == '/dashboard/category') {
    //   this.title1 = 'Categories';
    // } else {
    //   this.title1 = 'Welcome!';
    // }
    this.currentUser = localStorage.getItem('currentUser');
    this.httpService
      .getStudentById(parseInt(this.currentUser) + 1)
      .subscribe((data) => {
        this.title1 = data.username;
        console.log(this.student);
      });
  }

  pageUrl() {
    console.log(window.location.pathname);
    return window.location.pathname;
  }
}
