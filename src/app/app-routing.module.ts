import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityComponent } from './activity/activity.component';
import { StudentsComponent } from './students/students.component';
// import { OverviewPageComponent } from './overview-page/overview-page.component';
// import { AccountPageComponent } from './account-page/account-page.component';
// import { CategoryPageComponent } from './category-page/category-page.component';
// import { TransactionPageComponent } from './transaction-page/transaction-page.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'students', component: StudentsComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardPageComponent,
  // children: [
  // { path: 'overview', component: OverviewPageComponent },
  // { path: 'account', component: AccountPageComponent },
  // { path: 'category', component: CategoryPageComponent },
  // { path: 'transaction', component: TransactionPageComponent },
  // Add more child routes as needed
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
