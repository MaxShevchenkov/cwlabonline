import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document} from './interfaces';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DocumentService {

  private username = 'cwlab';
  private pass = 'cwlabadmin';

  constructor(private http: HttpClient) {
  }

  header: HttpHeaders = new HttpHeaders(
    {'Authorization': 'Basic ' + btoa(this.username + ':' + this.pass)})

  createDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(`${environment.documentDataServer}`, document,
      {headers: this.header});
  }

  getAll(){
    return this.http.get<Document[]>(`${environment.documentDataServer}`,
      {headers: this.header})
  }

  getDocumentById(id: bigint): Observable<Document>{
    return this.http.get<Document>(`${environment.documentDataServer}/${id}`, {headers: this.header})
  }


  remove(id: bigint): Observable<void> {
    return this.http.delete<void>(`${environment.documentDataServer}/${id}`, {headers: this.header});
  }

  update(id: bigint, document: Document):Observable<Document>{
    return this.http.put<Document>(`${environment.documentDataServer}/${id}`, document, {headers: this.header} )
  }
}
