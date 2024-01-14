import { Component } from '@angular/core';
import { Activity } from '../entitiy/activity';
import { StudentService } from '../service/student.service';
import { AdminService } from '../service/admin.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  activities!: Activity[];

  constructor(
    private httpservice: StudentService,
    private httpAdminService: AdminService
  ) {}

  ngOnInit() {
    this.httpAdminService.getAllActivities().subscribe((data) => {
      this.activities = data;
      console.log(this.activities);
    });
  }
  clear(_t10: Table) {
    throw new Error('Method not implemented.');
  }
  addActivityToStudent(id: number) {
    this.httpservice
      .addActivityToCalendar(
        parseInt(localStorage.getItem('currentUser') ?? ''),
        id
      )
      .subscribe((data) => {
        this.activities.push(data);
      });
    window.location.reload();
  }
}
