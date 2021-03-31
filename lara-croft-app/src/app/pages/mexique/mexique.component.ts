import { Component, OnInit } from '@angular/core';
import { TombraiderService } from 'src/app/systeme/services/tombraider.service';

@Component({
  selector: 'app-mexique',
  templateUrl: './mexique.component.html',
  styleUrls: ['./mexique.component.css']
})
export class MexiqueComponent implements OnInit {

  constructor(public tombraiderServ:TombraiderService) { }

  ngOnInit(): void {
  }

}
