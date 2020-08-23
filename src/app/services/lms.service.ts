import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class LmsService {

  apiURL = 'http://localhost:8080/lms/v1';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.apiURL + '/categories')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/courses')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCategory(): Observable<Category> {
    return this.http.get<Category>(this.apiURL + '/categories/CAT001')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createCategory(category): Observable<Category> {
    return this.http.post<Category>(this.apiURL + '/categories', JSON.stringify(category), this.httpOptions)
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
