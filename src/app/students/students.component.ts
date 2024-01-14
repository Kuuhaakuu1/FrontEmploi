import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../entitiy/student';
import { AdminService } from '../service/admin.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students!: Student[];
  header = 'New Account';
  constructor(
    private httpservice: StudentService,
    private httpAdminService: AdminService
  ) {}

  ngOnInit() {
    this.httpAdminService.getAllStudents().subscribe((data) => {
      this.students = data; // Fix: Wrap the data in an array
      console.log(this.students);
    });
  }

  saveAccount() {
    this.httpservice.createStudent(this.student).subscribe((data) => {
      this.students.push(data);
    });
    this.visible = false;
    this.visible2 = false;
  }
  hideDialog() {
    this.visible = false;
    this.visible2 = false;
    this.visible3 = false;
  }
  visible: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  deletedId!: number;
  student = {
    id: 0,
    username: 'string',
    mail: 'string',
    password: 'string',
    firstName: 'string',
    familyName: 'string',
    phone: 'string',
    address: '',
    calendar: {
      id: 0,
      title: '',
      scheduledActivities: [],
    },
  };
  beginDate: any;
  endDate: any;
  showDialog() {
    this.visible = true;

    this.student = {
      id: 0,
      username: 'string',
      mail: 'string',
      password: 'string',
      firstName: 'string',
      familyName: 'string',
      phone: 'string',
      address: '',
      calendar: {
        id: 0,
        title: '',
        scheduledActivities: [],
      },
    };
  }
  showUpdateDialog(acc: Student) {
    this.visible2 = true;
    this.student.id = acc.id;
    this.student.username = acc.username;
    this.student.mail = acc.mail;
    this.student.password = acc.password;
    this.student.firstName = acc.firstName;
    this.student.familyName = acc.familyName;
    this.student.phone = acc.phone;
    this.student.address = acc.address;
  }
  showDeleteDialog(id: number) {
    this.visible3 = true;
    this.deletedId = id;
  }
  deleteAccount() {
    this.httpservice.deleteStudent(this.deletedId).subscribe(
      (data) => {
        this.students = this.students.filter((a) => a.id != this.deletedId);
        console.log('deleteAccount');
        window.location.reload();
      },
      (error) => {
        console.log('Error deleting activity:', error);
      }
    );
    this.visible3 = false;
  }

  clear(_t10: Table) {
    throw new Error('Method not implemented.');
  }
}
