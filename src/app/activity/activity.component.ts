import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Activity } from '../entitiy/activity';
import { StudentService } from '../service/student.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  activities!: Activity[];
  activityId!: Activity[];
  header = 'New Account';
  constructor(
    private httpservice: StudentService,
    private httpAdminService: AdminService
  ) {}

  ngOnInit() {
    this.httpservice
      .getActivitiesInStudentCalendar(
        parseInt(localStorage.getItem('currentUser') ?? '') + 1
      )
      .subscribe((data) => {
        this.activities = data; // Fix: Wrap the data in an array
        console.log(this.activities);
      });
    this.httpservice.getAllActivities().subscribe((data) => {
      this.activityId = data;
      localStorage.setItem('lastActivityId', data.length.toString());
    });
  }

  saveAccount() {
    this.httpAdminService.createActivity(this.activity).subscribe((data) => {
      this.activities.push(data);
    });
    this.httpservice
      .addActivityToCalendar(
        parseInt(localStorage.getItem('currentUser') ?? '') + 1,
        parseInt(localStorage.getItem('lastActivityId') ?? '') + 1
      )
      .subscribe((data) => {
        this.activities.push(data);
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
  activity = {
    id: 0,
    name: '',
    beginDate: new Date(),
    endDate: new Date(),
  };
  beginDate: any;
  endDate: any;
  showDialog() {
    this.visible = true;

    this.activity = {
      id: 0,
      name: '',
      beginDate: new Date(),
      endDate: new Date(),
    };
  }
  showUpdateDialog(acc: Activity) {
    this.visible2 = true;
    this.activity.id = acc.id;
    this.activity.name = acc.name;
    this.activity.beginDate = acc.beginDate;
    this.activity.endDate = acc.endDate;
  }
  showDeleteDialog(id: number) {
    this.visible3 = true;
    this.deletedId = id;
  }
  deleteAccount() {
    console.log('deleteAccount');
    this.httpAdminService.deleteActivity(this.deletedId + 1).subscribe(
      (data) => {
        this.activities = this.activities.filter((a) => a.id != this.deletedId);
      },
      (error) => {
        console.log('Error deleting activity:', error);
      }
    );
    this.visible3 = false;
  }
  updateAccount() {
    this.httpservice
      .modifyActivityInCalendar(
        parseInt(localStorage.getItem('currentUser') ?? '') + 1,
        this.activity
      )
      .subscribe((data) => {
        this.activities.forEach((a) => {
          if (a.id == data.id) {
            a.name = data.name;
            a.beginDate = data.beginDate;
            a.endDate = data.endDate;
          }
        });
      });
    this.visible = false;
    this.visible2 = false;
  }

  clear(_t10: Table) {
    throw new Error('Method not implemented.');
  }
}
