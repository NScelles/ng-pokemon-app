import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon';
import { InMemoryDbService } from 'angular-in-memory-web-api';
 
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor(){ }

  createDb(){
    const pokemons: Pokemon[] = POKEMONS;
    return { pokemons: pokemons };
  }
}
