import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  apiURL = 'http://localhost:8080/lms/v1/courses';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCourses(): Observable<Course> {
    return this.http.get<Course>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCourse(id): Observable<Course> {
    return this.http.get<Course>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createCourse(course): Observable<Course> {
    return this.http.post<Course>(this.apiURL, JSON.stringify(course), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateCourse(id, course): Observable<Course> {
    return this.http.put<Course>(this.apiURL + '/' + id, JSON.stringify(course), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  deleteCourse(id) {
    return this.http.delete<Course>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
