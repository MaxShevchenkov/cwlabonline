import {Component, OnInit} from '@angular/core';
import {News} from '../../shared/interfaces';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {NewsServise} from '../../shared/news.servise';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  news: News;
  form: FormGroup;
  uSub: Subscription;
  isCreated: boolean = false;


  constructor(private route: ActivatedRoute,
              private newsService: NewsServise) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.newsService.getNewsById(params['id']);
      })
    ).subscribe((news: News) => {
      this.news = news;
      this.form = new FormGroup({
        title: new FormControl(news.title),
        body: new FormControl(news.body),
        author: new FormControl(news.author),
      });
    });
  }

  submit() {
    this.uSub = this.newsService.update(this.news.id, {
      id: this.news.id,
      title: this.form.value.title,
      body: this.form.value.body,
      author: this.form.value.author
    }).subscribe(() => {

    });
    this.isCreated = true;
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
