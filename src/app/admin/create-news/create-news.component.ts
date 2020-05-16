import {Component, OnInit} from '@angular/core';
import {NewsServise} from '../../shared/news.servise';
import {FormControl, FormGroup} from '@angular/forms';
import {News} from '../../shared/interfaces';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  form: FormGroup
  isCreated: boolean = false;

  constructor(private newsService:NewsServise) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      author: new FormControl()
    })
  }
  submit(){
    const news: News = {
      title: this.form.value.title,
      body: this.form.value.body,
      author: this.form.value.author
    }
    this.newsService.createNews(news).subscribe((res) => {
      console.log(res)
    })
    this.isCreated = true
    this.form.reset()
  }

}
