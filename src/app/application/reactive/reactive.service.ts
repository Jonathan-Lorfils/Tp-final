import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from '../crud/services/generic.service';
import { Client } from '../crud/models/client';


@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericService<Client, number>{

  constructor(http: HttpClient) {
    super(http,"http://localhost:3020/ClientsLocations");
   }
}
