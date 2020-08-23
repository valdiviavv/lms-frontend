import { Component, OnInit } from '@angular/core';
import {LmsService} from '../../services/lms.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList;

  constructor(private lmsService: LmsService) { }

  ngOnInit() {

  }

  getCoursesList() {
    this.lmsService.getCourses().subscribe(
      data => {
        this.coursesList = data;
        console.log(this.coursesList);
      },
      error =>  console.error(error),
      () => console.log('courses loaded')
    );
  }

}
