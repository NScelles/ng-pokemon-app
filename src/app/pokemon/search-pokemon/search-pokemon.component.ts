import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { debounceTime, distinct, distinctUntilChanged, filter, last, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: ``,
  standalone:false
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>;
  pokemons$: Observable<Pokemon[]>;
  isShow:boolean;

  constructor(
    private router:Router,
    private pokemonService: PokemonService
  ){}

  ngOnInit(): void {
    this.isShow=true;
    this.pokemons$ = this.searchTerms.pipe(
      //{ ......"a" ....."ab".."abz" .."ab"...."abc"....}
      debounceTime(300),
      //{ ......"ab....."ab"...."abc"....}
      distinctUntilChanged(),
      
      //{ ....."ab"...."abc"....}
      //map((term) => this.pokemonService.searchPokemonList(term))
      //{ .....Observable<"ab">....Observable<"abc">....}
      //concatMap/MergeMap/SwitchMap
      switchMap((term) => 
         this.pokemonService.searchPokemonList(term),
      )
      
    
      //{ .....pokemonList(ab)....pokemonList(abc)....}
    );
  }

  show(isShow:boolean){
    this.isShow=isShow;   
  }

  search(term:string){ 
    this.searchTerms.next(term);
  }
  
  goToDetail(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
 