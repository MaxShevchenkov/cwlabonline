import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Document} from '../../shared/interfaces';
import {DocumentService} from '../../shared/document.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  isCreated: boolean = false;

  constructor(private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      body: new FormControl(),
      link: new FormControl(),
      author: new FormControl()
    });
  }

  submit() {
    const document: Document = {
      title: this.form.value.title,
      description: this.form.value.description,
      link: this.form.value.link,
      body: this.form.value.body,
      author: this.form.value.author
    }
    this.isCreated = false;
    this.documentService.createDocument(document).subscribe(() => {
    });
    this.isCreated = true;
    this.form.reset()
  }

}
