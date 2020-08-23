import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CoursesComponent} from './components/courses/courses.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home/:name', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
