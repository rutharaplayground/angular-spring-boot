import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../common/users';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/user/';

  private extractData(res: HttpResponse<any> ) {
    let body = res;
    return body || {};
  };

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.error);
  };


searchUsersPaginate(thePage: number, 
    thePageSize: number, 
    theKeyword: string): Observable<GetResponseUsers> {

  // need to build URL based on keyword, page and size 
  const searchUrl = `${this.baseUrl}search/findByLoginIDContaining?loginID=${theKeyword}`
                    + `&page=${thePage}&size=${thePageSize}`;

  return this.httpClient.get<GetResponseUsers>(searchUrl);
}

getUsersListPaginate(thePage: number, 
  thePageSize: number, ): Observable<any> {

// need to build URL based on category id, page and size 
const searchUrl = `${this.baseUrl}` + `?page=${thePage}&size=${thePageSize}`;

  //return this.httpClient.get<GetResponseUsers>(searchUrl);
  return this.httpClient.get(searchUrl);
}

save(item: any): Observable<any>{
    return this.httpClient.post(this.baseUrl ,item );
}

update(item: any): Observable<any>{
    return this.httpClient.post(this.baseUrl ,item );
}

delete(item: any): Observable<any>{
  return this.httpClient.post(this.baseUrl + 'delete' ,item );
}

}

interface GetResponseUsers {
  _embedded: {
    users: Users[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
