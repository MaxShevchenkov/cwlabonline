import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../shared/document.service';
import {Observable} from 'rxjs';
import {Document, News} from '../shared/interfaces';
import {NewsServise} from '../shared/news.servise';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  documents$: Observable<Document[]>;
  news$: Observable<News[]>;

  constructor(private documentService: DocumentService,
              private newsService: NewsServise) { }

  ngOnInit(): void {
    this.documents$ = this.documentService.getAll()
    this.news$ = this.newsService.getAllNews()

  }

}
