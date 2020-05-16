import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Document, News} from '../shared/interfaces';
import {DocumentService} from '../shared/document.service';
import {NewsServise} from '../shared/news.servise';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  news$: Observable<News[]>;

  constructor(private newsServise:NewsServise) { }

  ngOnInit(): void {
    this.news$ = this.newsServise.getAllNews()
  }

}
