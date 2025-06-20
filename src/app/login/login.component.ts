import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit{
  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)';
  name: string;
  password: string;
  auth:AuthService;
  

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(){
    this.auth=this.authService;
  }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
      this.message = this.authService.isLoggedIn ?
          'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect. (pikachu/pikachu)';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
      this.message = 'Tentative de connexion en cours ...';
      this.authService.login(this.name, this.password).subscribe((isLoggedIn:boolean) => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
              // Récupère l'URL de redirection depuis le service d'authentification
              // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
              let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemons';
              // Redirige l'utilisateur
              this.router.navigate([redirect]);
          } else {
              this.password = '';
          }
      });
  }

  // Déconnecte l'utilisateur
  logout() {
      this.authService.logout();
      this.message = 'Vous êtes déconnecté ! (pikachu/pikachu)'
  }

  goToListPokemons(){
    this.router.navigate(['/pokemons'])
  }
}
