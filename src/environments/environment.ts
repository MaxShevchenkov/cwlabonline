// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Envir} from './interface';

export const environment: Envir = {
  production: false,
  apiKey: 'AIzaSyDsvtQThtkGtwAYiad0LL4wZ13YerHRtug',
  documentDataServer: 'https://docmicroserver.herokuapp.com/documents',
  newsDataServer: 'https://newsmicroserver.herokuapp.com/news'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
