import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherComponent } from './application/afficher/afficher.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { CreateComponent } from './application/crud/create/create.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AfficherComponent,
    ContactComponent,
    Error404Component,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ReactiveComponent,
    TutorielsComponent,
    CreateComponent,
    DeleteComponent,
    ReadComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
