import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../entitiy/activity';
import { Student } from '../entitiy/student';
import { Admin } from '../entitiy/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url: string = 'http://localhost:8080/admin';
  constructor(private http: HttpClient) {}

  public getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url + '/activities');
  }

  public getActivityById(id: number): Observable<Activity> {
    return this.http.get<Activity>(this.url + '/activity/' + id);
  }

  public createActivity(activity: Activity): Observable<Activity> {
    console.log(localStorage.getItem('lastActivityId'));
    activity.id = parseInt(localStorage.getItem('lastActivityId') ?? '') + 1;
    activity.beginDate = new Date(activity.beginDate);
    activity.endDate = new Date(activity.endDate);
    console.log(activity.id);
    console.log(activity);
    return this.http.post<Activity>(this.url + '/activity', activity);
  }

  public updateActivity(activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(
      this.url + '/activity/' + activity.id,
      activity
    );
  }

  public deleteActivity(id: number): Observable<Activity> {
    return this.http.delete<Activity>(this.url + '/activity/' + id);
  }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/allStudents');
  }

  public createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.url + '/createAdmin', admin);
  }
}
