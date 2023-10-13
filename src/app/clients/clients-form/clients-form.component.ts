import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent {
  formulario!: FormGroup;
  idForm: any;
  submitted = false;
  

  

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private route: ActivatedRoute, private router: Router) {
    this.createForm();

  }

  createForm(){
    this.formulario = this.formBuilder.group({
      names: ['', [Validators.required]],
      lastNames: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', [Validators.required, Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idForm = params['id'];
      this.loadDataForm(this.idForm)
       
    });
  }

  loadDataForm(id: any){
    this.clientService.getClient(id).subscribe(res=>{
      console.log(res);
      // Asinar lo valores de RES a los campos  del formulario
      this.formulario.get('names')?.setValue(res.names);
      this.formulario.get('lastNames')?.setValue(res.lastNames);
      this.formulario.get('phone')?.setValue(res.phone);
      this.formulario.get('address')?.setValue(res.address);
    });
  }

 

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      if(this.idForm){
        // Edito
        this.clientService.updateClient(this.formulario.value,this.idForm).subscribe(res => {
          this.redirectClient();
        });
      } else {
        // Guardo
        this.clientService.addClient(this.formulario.value).subscribe(res => {
          this.redirectClient();

        });
      }
    } else {

    }

    if (this.formulario.valid) {
      
      console.log('Valid input: ' + this.formulario.value.number);
    } else {
      console.log('Invalid input');
    }
   
  }

  redirectClient(){
    this.router.navigate(['/clientes']);
  }

}
