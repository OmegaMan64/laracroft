import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  user:{identifiant:string, motdepasse:string} = {identifiant:"lara", motdepasse:"Underworld"};


  constructor() { }

  ngOnInit(): void {
    
  }
  logUser(){
    console.log(this.user);
    
  }

}
