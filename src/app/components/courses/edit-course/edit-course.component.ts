import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../models/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  editedCourse: FormGroup;
  errorMessage = 'Please fill out the form before submitting';
  invalidForm = false;
  public courseDetails;

  constructor(private courseService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.courseDetails = new Course('','');
    this.courseForm();
    this.getCourse(this.route.snapshot.params.id);
  }


  courseForm() {
    this.editedCourse = new FormGroup({
      'name': new FormControl('',[Validators.required])
    })
  }

  get name() {
    return this.editedCourse.get('name');
  }

  getCourse(id:string) {
    this.courseService.getCourse(id).subscribe(
      data => {
        this.courseDetails = data;
        console.log(this.courseDetails);
      },
      error => console.error(error),
      () => console.log('Course loaded')
    )
  }

  editCourse(id: string) {
    if (!this.editedCourse.valid) {
      this.invalidForm = true;
      console.log('Please fill out the form before submitting!');
    } else {
      this.courseService.updateCourse(id, this.editedCourse.value).subscribe(
        data => {
          this.editedCourse.reset();
          console.log('Your course has been edited.');
          return true;
        },
        error => {
          console.log(error);
        }
      );
    }
  }



}
