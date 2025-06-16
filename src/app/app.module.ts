import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Assure-toi que le chemin est correct
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
//import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service'; 

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
     // Ajoute ici tous tes composants
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    NgFor,
    NgIf,
    DatePipe,
    PokemonModule,
    AppRoutingModule,
    
    
    // Ajoute d'autres modules nécessaires ici
  ],
  providers: [
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false , put204:false, delete404:false, post204:false}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }