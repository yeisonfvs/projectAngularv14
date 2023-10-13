import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UsersService } from './users/users.service';
import { descifrar } from './shared/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  token: string = '';
  items: any[];
  activeItem: any;
  userName: string = '';

  constructor(private router: Router, private usersService: UsersService) {
    // this.token = localStorage.getItem('token') || '';
    this.items = [
      {
        label: 'inicio',
        icon: 'pi pi-home',
        routerLink: [''],
      },
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        items: [
          {
            label: 'lista de clientes',
            icon: 'pi pi-align-left',
            routerLink: ['/clientes'],
          },
          {
            label: 'cliente nuevo',
            icon: 'pi pi-user-plus',
            routerLink: ['/clientes/nuevo'],
          },
        ],
      },
      {
        label: 'Registrarse',
        icon: 'pi pi-user',
        routerLink: ['/registrarse'],
      },
    ];
    this.activeItem = this.items[0];
  }

  ngOnInit() {
    const tokenStorage = localStorage.getItem('token');
    
    const tokenDecode = descifrar(tokenStorage || '');
    
    const userArray = tokenDecode.split('_');
    
    this.userName = userArray[0];
    this.usersService.setToken(tokenStorage || '');
    this.usersService.token$.subscribe((res) => {
      

      this.token = res;
    });
  }

  logout() {
    this.usersService.setToken('');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
