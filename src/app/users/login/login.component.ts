import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router'

import { cifrar } from '../../shared/util';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup;
  login: any;
  
  


  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) {
    this.createFormLogin();


  }

  createFormLogin() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.required]],
    });
  }

  onSubmitLogin() {
    if (this.formLogin.valid) {
      

      this.userService.login(this.formLogin.value).subscribe(res => {
        console.log(res);
        if (res.length) {
          console.log('logueado');
          const {username, password} = this.formLogin.value;
          const token = `${username}_${password}`;
          
          localStorage.setItem('token',cifrar(token));
          
           
          this.userService.setToken(cifrar(token)),
          this.redirectUsers();
        } else {
          this.formLogin.get('password')?.setErrors({ loginError: true });
          
        }
      });
      
    }
  }

  redirectUsers() {
    this.router.navigate(['/clientes']);
  }


}


