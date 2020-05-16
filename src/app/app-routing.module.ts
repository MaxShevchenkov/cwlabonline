import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminModule} from './admin/admin.module';
import {CwaboutComponent} from './cwabout/cwabout.component';
import {DocumentsPageComponent} from './documents-page/documents-page.component';
import {AllDocumentsComponent} from './all-documents/all-documents.component';
import {AllNewsComponent} from './all-news/all-news.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path:'', component: HomePageComponent},
      {path: 'document/:id', component: DocumentsPageComponent},
      {path: 'about', component: CwaboutComponent},
      {path: 'documents', component: AllDocumentsComponent},
      {path: 'news', component: AllNewsComponent}
    ]
  },
  {
    path: 'admin', loadChildren: () => AdminModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
