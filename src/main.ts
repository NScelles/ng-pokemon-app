import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assure-toi que le chemin est correct
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
//import { InMemoryBackendService, SEED_DATA } from 'angular-in-memory-web-api'



if (environment.production) {
  enableProdMode();
  
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));