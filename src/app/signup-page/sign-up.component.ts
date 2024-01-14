import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../entitiy/user';
import { Student } from '../entitiy/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignupPageComponent {
  username: any;
  mail: any;
  password: any;
  firstname: any;
  familyname: any;
  phone: any;
  address: any;

  constructor(private router: Router, private httpService: StudentService) {} // Inject Router in the constructor
  onSubmit() {
    const user: Student = {
      id: 0,
      username: this.username,
      mail: this.mail,
      password: this.password,
      firstName: this.firstname,
      familyName: this.familyname,
      phone: this.phone,
      address: this.address,
      calendar: {
        id: 0,
        title: this.username + "'s calendar",
        scheduledActivities: [],
      },
    };

    this.httpService.createStudent(user).subscribe(
      (response) => {
        // Handle success response
        console.log('User added successfully:', response);
        this.router.navigate(['/login']);
      }
      // (error) => {
      //   // Handle error response
      //   console.error('Error adding user:', error);
      // }
    );
  }
}
