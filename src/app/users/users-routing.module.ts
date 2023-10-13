import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  },
  { path: 'registrarse', component: RegistryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
