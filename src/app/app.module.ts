import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginPageComponent } from './login-page/login-page.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/sign-up.component';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from './navbar/navbar.component';
// import { OverviewPageComponent } from './overview-page/overview-page.component';
// import { AccountPageComponent } from './account-page/account-page.component';
import { HttpClientModule } from '@angular/common/http';
// import { CategoryPageComponent } from './category-page/category-page.component';
// import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { Activity } from './entitiy/activity';
import { ActivityComponent } from './activity/activity.component';
import { StudentsComponent } from './students/students.component';
import { ActivitiesComponent } from './activities/activities.component';
// import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    // HomePageComponent,
    ActivityComponent,
    SignupPageComponent,
    NavbarComponent,
    StudentsComponent,
    ActivitiesComponent,
    // ActivityComponent,
    // OverviewPageComponent,
    // AccountPageComponent,
    // CategoryPageComponent,
    // TransactionPageComponent,
  ],
  imports: [
    HttpClientModule,
    SelectButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule,
    ChartModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ToggleButtonModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
