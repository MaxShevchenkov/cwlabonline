import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Document, News} from './interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class NewsServise {

  private username = 'cwlab';
  private password = 'newscwlab';

  constructor(private http: HttpClient) {}

  header: HttpHeaders = new HttpHeaders({
    'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
  })

  createNews(news: News): Observable<News>{
    return this.http.post<News>(`${environment.newsDataServer}`, news, {headers: this.header})
  }

  getAllNews():Observable<News[]>{
    return this.http.get<News[]>(`${environment.newsDataServer}`, {headers: this.header})
  }

  remove(id: bigint): Observable<void> {
    return this.http.delete<void>(`${environment.newsDataServer}/${id}`, {headers: this.header});
  }

  getNewsById(id: bigint): Observable<News>{
    return this.http.get<News>(`${environment.newsDataServer}/${id}`, {headers: this.header})
  }
  update(id: bigint, news: News):Observable<News>{
    return this.http.put<News>(`${environment.newsDataServer}/${id}`, news, {headers: this.header} )
  }
}
