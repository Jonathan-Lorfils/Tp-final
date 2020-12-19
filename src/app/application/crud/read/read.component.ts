import {  ClientService } from '../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../crud/models/client';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listClient: Array<Client>;
  public headElements = ['ID','Prenom', 'Nom', 'Adresse courriel', 'Numero permis de conduire' ,'Debut de la Location', 'Fin de la Location', 'Operation'];

  constructor(private service: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients():void{
    this.service.getAll().subscribe(data => {
      this.listClient=data;
  }, (err) => {
   console.log(err) 
  });
  }

  public delete(id:number,i:any){
    if(window.confirm('Etes-vous sures de vouloir supprimer le client ?')){
      this.service.deleteById(id).subscribe(() =>{
        this.listClient.splice(i,1);
      }, (err) => {
        console.log(err)
      });
    }
  }

}