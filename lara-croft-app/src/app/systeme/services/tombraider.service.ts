import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TombRaider } from '../modeles/tombraider';

@Injectable({
  providedIn: 'root'
})
export class TombraiderService {

  tombraider:any;
  

 

  constructor(private http:HttpClient) {
    //Tableau typées
     this.tombraider = [];
     this.getTombraider();
     }
     // Appeler des données externes
     getTombraider(){
       this.http.get('assets/tombraider.json').subscribe(data => {
        console.log("Données de Jason", data);
        this.tombraider = data;
        

       });
     }
}
