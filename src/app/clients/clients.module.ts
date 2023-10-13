import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './client/client.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { SharedModule } from '../shared/shared.module';
import { ModalDeleteComponent } from './modals/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientsFormComponent,
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
