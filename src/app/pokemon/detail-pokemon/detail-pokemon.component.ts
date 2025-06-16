import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: ``,
  standalone:false
})
export class DetailPokemonComponent implements OnInit{

  pokemonList:Pokemon[];
  pokemon: Pokemon|undefined;
  auth:AuthService;

  constructor(
    private route:ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.auth = this.authService;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
    .subscribe(pokemon => this.pokemon = pokemon);
    }   
  }

  goBack(): void{
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon : Pokemon){
    this.router.navigate(['/edit/pokemon',pokemon.id]);
  }

  deletePokemon(pokemon:Pokemon){
    if(this.auth.isLoggedIn)
      this.pokemonService.deletePokemonById(+pokemon.id)
        .subscribe(()=>{
            this.goBack();
        });
    else
        this.router.navigate(['/login']);
    
  }

}
