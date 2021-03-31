import { Component, OnInit } from '@angular/core';
import { TombRaider } from 'src/app/systeme/modeles/tombraider';
import { TombraiderService } from 'src/app/systeme/services/tombraider.service';

@Component({
  selector: 'app-inde',
  templateUrl: './inde.component.html',
  styleUrls: ['./inde.component.css']
})
export class IndeComponent implements OnInit {

  
 
  constructor(public tombraiderServ:TombraiderService) { };

  ngOnInit(): void {
    
  }; 
  logTombraider(t:TombRaider){
    console.log(t);
    
  }
}
