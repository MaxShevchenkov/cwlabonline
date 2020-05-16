import {Component, Input, OnInit} from '@angular/core';
import {DocumentService} from '../shared/document.service';
import {Observable} from 'rxjs';
import {Document} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss']
})
export class DocumentsPageComponent implements OnInit {

  document$: Observable<Document>

  constructor(private route:ActivatedRoute,
              private documentService:DocumentService) { }


  ngOnInit(): void {
      this.document$ = this.route.params
        .pipe(switchMap((params:Params) => {
            return this.documentService.getDocumentById(params['id'])
        }))
  }

}
