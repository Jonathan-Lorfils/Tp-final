import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherComponent } from './application/afficher/afficher.component';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { Error404Component } from './application/error404/error404.component';
import { HomeComponent } from './application/home/home.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';


const routes: Routes = [
  
   {path:'tutoriel', 
    children:[
      {path:':id', component:TutorielsComponent}
      
    ]},

    {path:'updateForm/:iDClient', component:UpdateComponent},
    {path:'formulaire', component:ReactiveComponent},

    {path:'afficher/:iDClient', component:AfficherComponent},
    {path:'crud', component:ReadComponent},
    {path:'contact', component:ContactComponent},
    {path:'home', component:HomeComponent},
    
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'**', component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }