import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-pokemon',
  standalone:false,
  template: `
    <h2 class="center"> Editer {{pokemon?.name}} </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route:ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService,
  ){ }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
    .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }


  }

}
