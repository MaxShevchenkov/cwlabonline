import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DocumentsPageComponent} from './documents-page/documents-page.component';
import {DocumentComponent} from './shared/components/document/document.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {HttpClientModule} from '@angular/common/http';
import {AllDocumentsComponent} from './all-documents/all-documents.component';
import {NewsComponent} from './shared/components/news/news.component';
import {AllNewsComponent} from './all-news/all-news.component';
import {AdminModule} from './admin/admin.module';
import {FormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    DocumentsPageComponent,
    DocumentComponent,
    NewsPageComponent,
    AllDocumentsComponent,
    AllNewsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
