import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentService} from '../../shared/document.service';
import {Document} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  documents: Document[] = [];
  pSub: Subscription;
  dSub: Subscription;
  search = '';

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
   this.pSub =  this.documentService.getAll().subscribe(document => {
      this.documents = document
     console.log(document)
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

  remove(id: bigint) {
      this.documentService.remove(id).subscribe(() => {
        this.documents = this.documents.filter(document => document.id !== id)
      })
  }
}
