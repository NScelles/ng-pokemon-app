import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
 { path: '', redirectTo: 'pokemons', pathMatch:'full'},
 { path:'login', component: LoginComponent },
 { path:'**', component:PageNotFoundComponent }
];

@NgModule({
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }