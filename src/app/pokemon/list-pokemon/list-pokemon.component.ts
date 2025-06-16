import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  standalone:false
  
})
export class ListPokemonComponent implements OnInit {

  pokemonsList : Pokemon[];

  constructor(
    private router:Router,
    private pokemonService: PokemonService
  ){ }
    //const PokemonService = new PokemonService(); Interdit !!!
  

  ngOnInit(){
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonsList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
