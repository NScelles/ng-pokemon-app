import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})


export class AppComponent implements OnInit{

  auth:AuthService;

  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.auth=this.authService;
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  deconnection(){
    this.auth.logout();
  }
 
  /*ngOnInit(): void {
    console.table(this.pokemonsList);
  }

  selectPokemon(pokemonId : String){ 
    
    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon)
      console.log(`Vous avez choisi le pokémon ${pokemon.name}`);
    else
      console.log(`Ce pokemon n'existe pas`);
    this.pokemonSelected = pokemon;
  }*/
}
