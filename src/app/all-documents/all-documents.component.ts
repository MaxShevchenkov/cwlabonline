import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Document} from '../shared/interfaces';
import {DocumentService} from '../shared/document.service';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss']
})
export class AllDocumentsComponent implements OnInit {

  documents$: Observable<Document[]>;
  search: string;


  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documents$ = this.documentService.getAll()
  }

}
