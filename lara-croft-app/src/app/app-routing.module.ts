import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Error404Component } from './pages/error404/error404.component';
import { IndeComponent } from './pages/inde/inde.component';
import { LaraComponent } from './pages/lara/lara.component';
import { MexiqueComponent } from './pages/mexique/mexique.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'inde', component:IndeComponent},
  {path:'mexique', component:MexiqueComponent},
  {path:'lara', component:LaraComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'**', component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
