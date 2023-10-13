import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {

  formRegistry!: FormGroup;


  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {
    this.createFormRegistry();



  }

  createFormRegistry() {
    this.formRegistry = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.required]],
      confirmarPassword: ['', [Validators.required, Validators.required]],

    },
    );

  }


  onSubmitRegistry() {
    if (this.formRegistry.valid) {
      // const formData = this.formRegistry.value;
      // console.log(formData); 
      this.changeValidInput();
      console.log(this.formRegistry.value);

      const dataForm = this.formRegistry.value;
      this.usersService.addUser({ username: dataForm.username, password: dataForm.password }).subscribe(res => {
        this.redirectUsers();

      });
    }

  }
  changeValidInput() {
    if (this.formRegistry.get('password')?.value && this.formRegistry.get('confirmarPassword')?.value) {
      if (this.formRegistry.get('password')?.value === this.formRegistry.get('confirmarPassword')?.value) {
        

      } else {
        this.formRegistry.get('confirmarPassword')?.setErrors({ passwordMismatch: true });

      }
    }

  }

  redirectUsers() {
    this.router.navigate(['/login']);
  }

}
