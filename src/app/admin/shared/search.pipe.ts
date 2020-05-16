import {Pipe, PipeTransform} from '@angular/core';
import {Document} from '../../shared/interfaces';

@Pipe({
  name: 'searchDocument'
})
export class SearchPipe implements PipeTransform{
  transform(documents: Document[], search = ''): Document[] {
    if (!search.trim()){
      return documents;
    }
    return documents.filter(document => {
      return document.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}

