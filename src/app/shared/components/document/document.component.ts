import {Component, Input, OnInit} from '@angular/core';
import {Document} from '../../interfaces';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styles: [
  ]
})
export class DocumentComponent implements OnInit {
  @Input() document: Document
  constructor() { }

  ngOnInit(): void {
  }

}
