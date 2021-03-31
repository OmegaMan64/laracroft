import { Component } from '@angular/core';

@Component({
  selector: 'app-racine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lara croft';
  soustitre = "Wallah je n'ai pas trouver de trésor içi je vais voir ailleur :'(";

  bonjourAccueil(){
    console.log("Bonjour l'accueil");
    
  }
}
