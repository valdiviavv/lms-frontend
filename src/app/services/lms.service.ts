import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LmsService {

  apiURL = 'http://localhost:8080/lms/v1';

  constructor(private http: HttpClient) { }

  httpOptions = {
    header : new HttpHeaders({'Content-Type' : 'application/json'})
  }

  getCategories(): Observable<any> {
    return this.http.get(this.apiURL + '/categories')
      .pipe(
        retry(1),
        catchError(this.handleError))

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${ error.status }\nMessage: ${ error.message }`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
