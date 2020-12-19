import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveService } from '../reactive/reactive.service'
import { Client } from '../crud/models/client';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  clientForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    adresseCourriel: new FormControl('', Validators.required),
    numeroPermisConduire: new FormControl('', [Validators.required,Validators.maxLength(13),Validators.minLength(13)]),
    debutLocation: new FormControl('', Validators.required),
    finLocation: new FormControl('', Validators.required),
    notes: new FormControl()
  })

  client: Client;
  validMessage: string = "";

  get formulaire(){
    return this.clientForm.controls;
  }

  constructor(private service: ReactiveService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.clientForm.valid){
      this.service.post(this.clientForm.value).subscribe(data => {
        this.clientForm.reset();
      })
    }
      else {
        this.validMessage="Veuillez remplir tous les champs obligatoires avant d'envoyer votre formulaire"
      }
  }

}
