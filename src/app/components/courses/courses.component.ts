import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList;
  public coursesDetails;
  currentCourse = null;
  currentIndex = -1;
  newCourse: FormGroup;
  errorMessage = 'Please fill out the form before submitting';
  invalidForm = false;

  constructor(private courseService: CoursesService) {
  }

  ngOnInit() {
    this.courseForm();
  }

  courseForm() {
    this.newCourse = new FormGroup({
      'name': new FormControl('', [Validators.required])
    });
  }

  get name() {
    return this.newCourse.get('name');
  }

  submitCourse() {
    if (!this.newCourse.valid) {
      this.invalidForm = true;
      console.log('Please fill out the form before submitting!');
    } else {
      this.courseService.createCourse(this.newCourse.value).subscribe(
        data => {
          this.newCourse.reset();
          console.log('Your course has been created.');
          return true;
        },
        error => {
          console.log(error);
        }
      );
    }
  }


  getCoursesList() {
    this.courseService.getCourses().subscribe(
      data => {
        this.coursesList = data;
        console.log(this.coursesList);
      },
      error => console.error(error),
      () => console.log('courses loaded')
    );
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id).subscribe(
      data => {
        this.coursesDetails = data;
      },
      error => console.error(error),
      () => console.log('Course Deleted')
    );
  }

  setActiveCourse(course, index) {
    this.currentCourse = course;
    this.currentIndex = index;
  }

}
