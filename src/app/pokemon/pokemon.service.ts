import { Inject, Injectable, signal } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'api/pokemons';

  constructor( private http: HttpClient ){}

  getPokemonList(): Observable<Pokemon[]>{
    //return POKEMONS;
    return this.http.get<Pokemon[]>(`${this.apiUrl}`).pipe(
      
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,[])),
      map((pokemons) =>
        pokemons.map((pokemon: Pokemon) => ({
          ...pokemon, 
          created: new Date(pokemon.created)   
        }))
      )
    )
  }

  getPokemonById(pokemonId:number): Observable<Pokemon|undefined> {
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId);
    return this.http.get<Pokemon>(`${this.apiUrl}/${pokemonId}`).pipe(
      map((response) => {
        // Convertir le champ "created" en type Date
        if (response && response.created) {
          response.created = new Date(response.created);
        }
        return response;
      }),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined)),
      
    )
  }

  updatePokemon(pokemon:Pokemon):Observable<Pokemon|undefined>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Pokemon>(`${this.apiUrl}/${pokemon.id}`,pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined)),
    )
  }

  deletePokemonById(pokemonId: number):Observable<null>{
    return this.http.delete(`${this.apiUrl}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined)),
    )
  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon|undefined>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>(`${this.apiUrl}`,pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined)),
    )
  }

  searchPokemonList(term:string):Observable<Pokemon[]>{
    if(term.length<=1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,[])),
      map((pokemons) =>
        pokemons.map((pokemon: Pokemon) => ({
          ...pokemon, 
          created: new Date(pokemon.created)   
        }))
      )
    )
  }

  private log(response:any){
    console.table(response);
    
  }
  

  private handleError(error:Error,errorValue: any){
    console.error(error.message);
    return of(errorValue);
  }

  getPokemonTypeList():string[]{
    return[
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
