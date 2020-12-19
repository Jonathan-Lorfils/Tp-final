import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Client } from '../../crud/models/client';

@Injectable({
  providedIn: 'root'
})


export class ClientService extends GenericService<Client, Number>{

  constructor(http: HttpClient) { 
    super(http, "http://localhost:3020/ClientsLocations");
  }
}