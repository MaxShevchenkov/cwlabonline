import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {News} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {NewsServise} from '../shared/news.servise';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  news$: Observable<News>;

  constructor(private route:ActivatedRoute,
              private newsService: NewsServise) { }


  ngOnInit(): void {
    this.news$ = this.route.params
      .pipe(switchMap((params:Params) => {
        return this.newsService.getNewsById(params['id'])
      }))
  }
}
