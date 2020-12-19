import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../crud/models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  client: Client;
  updateClientForm:FormGroup;
  validMessage: string = '';

  constructor(private service: ClientService, private router: Router, private route: ActivatedRoute) { } // router Router permet de faire des route dans une methode TANDIS QUE routerLink permet de faire une route dans un html(hyperlien)

  ngOnInit(): void {
    this.id=this.route.snapshot.params['iDClient'] // recupere une image
    this.service.getById(this.id).subscribe(data =>{ // subscribe permet de retourner un user
      this.client = data;
    },(err) => {
      console.log(err);
    });
    
    this.updateClientForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      adresseCourriel: new FormControl('', Validators.required),
      numeroPermisConduire: new FormControl('', [Validators.required,Validators.maxLength(13),Validators.minLength(13)]),
      debutLocation: new FormControl('', Validators.required),
      finLocation: new FormControl('', Validators.required),
      notes: new FormControl()
    })
  }



  public updateClient() {
    this.service.put(this.id,this.updateClientForm.value).subscribe(() =>{
      this.router.navigateByUrl('crud');
    }, (err) => {
      console.log(err);
    });
  }

}
