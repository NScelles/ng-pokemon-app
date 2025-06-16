import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl:'./pokemon-form.component.css',
  standalone:false
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon : Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor( 
    private router: Router,
    private pokemonService: PokemonService
  ){ }

  ngOnInit(): void {
    this.types=this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type:string):boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event:Event,type:string){
    const isChecked = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    }
    else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }
  }

  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  goToEditPokemon(pokemon : Pokemon){
    this.router.navigate(['/edit/pokemon',pokemon.id]);
  }

  onSubmit(){
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon) => {
        if(pokemon)
         this.router.navigate(['/pokemon', pokemon.id])
      })
    }else{
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe((pokemon) => {
        if(pokemon)
         this.router.navigate(['/pokemon', pokemon.id])
      })
    }
    
    //this.router.navigate(['/pokemon', this.pokemon.id]);

  }
}
