import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemHeroService } from './back-end/backend';
import { LivreModule } from './modules/livre/livre.module';
import { CommonModule } from '@angular/common';
import { ProfesseurModule } from './modules/professeur/professeur.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
    LivreModule,
    ProfesseurModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
