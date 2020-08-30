import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Category} from '../models/category.model';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiURL = 'http://localhost:8080/lms/v1/categories';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.apiURL )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createCategory(category): Observable<Category> {
    return this.http.post<Category>(this.apiURL, JSON.stringify(category), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  updateCategory(id, category): Observable<Category> {
    return this.http.put<Category>(this.apiURL + '/' + id, JSON.stringify(category), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  deleteCategory(id): Observable<Category> {
    return this.http.delete<Category>(this.apiURL + '/' + id, this.httpOptions)
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
