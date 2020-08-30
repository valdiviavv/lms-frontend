import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './components/courses/courses.component';
import { EditCourseComponent } from './components/courses/edit-course/edit-course.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CategoriesComponent,
    CoursesComponent,
    EditCourseComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
