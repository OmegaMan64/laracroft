import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { IndeComponent } from './pages/inde/inde.component';
import { MexiqueComponent } from './pages/mexique/mexique.component';
import { LaraComponent } from './pages/lara/lara.component';
import { Error404Component } from './pages/error404/error404.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { TombraiderService } from './systeme/services/tombraider.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    IndeComponent,
    MexiqueComponent,
    LaraComponent,
    Error404Component,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TombraiderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
