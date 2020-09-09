import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EditCourseComponent } from './components/courses/edit-course/edit-course.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home/:name', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category-edit/:id', component: EditCategoryComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course-edit/:id', component: EditCourseComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'user-edit/:id', component: EditUserComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
