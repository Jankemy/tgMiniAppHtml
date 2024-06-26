import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';


// in the main.ts file
import { bootstrapApplication } from '@angular/platform-browser';




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()]
// });