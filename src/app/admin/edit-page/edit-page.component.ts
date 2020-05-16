import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DocumentService} from '../../shared/document.service';
import {switchMap} from 'rxjs/operators';
import {Document} from '../../shared/interfaces';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  document: Document;
  form: FormGroup;
  uSub: Subscription;
  isCreated: boolean = false;


  constructor(private route: ActivatedRoute,
              private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.documentService.getDocumentById(params['id']);
      })
    ).subscribe((document: Document) => {
      this.document = document;
      this.form = new FormGroup({
        title: new FormControl(document.title),
        body: new FormControl(document.body),
        description: new FormControl(document.description),
        link: new FormControl(document.link),
        author: new FormControl(document.author),
      });
    });
  }

  submit() {
    this.uSub = this.documentService.update(this.document.id, {
      id: this.document.id,
      title: this.form.value.title,
      body: this.form.value.body,
      description: this.form.value.description,
      link: this.form.value.link,
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
