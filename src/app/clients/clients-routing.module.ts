import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { authGuard } from '../guards/auth.guard';


const routes: Routes = [
{ path: '', component: ClientComponent, canActivate: [authGuard]},
{ path: 'nuevo', component: ClientsFormComponent, canActivate: [authGuard]},
{ path: 'editar/:id', component: ClientsFormComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ClientsRoutingModule { }
