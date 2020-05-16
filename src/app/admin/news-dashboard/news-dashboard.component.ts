import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from '../../shared/interfaces';
import {NewsServise} from '../../shared/news.servise';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit, OnDestroy {

  newsList: News[] = [];
  pSub: Subscription;
  dSub: Subscription;
  search: string;

  constructor(private newsServise: NewsServise ) { }

  ngOnInit(): void {
    this.pSub = this.newsServise.getAllNews().subscribe(newsList => {
        this.newsList = newsList;
          console.log(newsList)
      })
  }

  remove(id: bigint) {
    this.newsServise.remove(id).subscribe(() => {
      this.newsList = this.newsList.filter(document => document.id !== id)
    })
  }

  ngOnDestroy(): void {
    if (this.pSub){
      this.pSub.unsubscribe()
    }
    if (this.dSub){
      this.dSub.unsubscribe()
    }
  }
}
