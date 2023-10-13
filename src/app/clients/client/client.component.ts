import { Component, ChangeDetectorRef } from '@angular/core';
import { ClientService } from '../services/client.service';
import { iClient } from './cliente';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ClientComponent {
  clients: iClient[] = [];
  visible: boolean = false;

  constructor(
    private clientService: ClientService,
    private httpClient: HttpClient,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe((res) => {
      this.clients = res;
    });
    this.cdr.detectChanges();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe((res) => {
      console.log('cliente eliminado', res);
      this.getClients();
    });
  }

  getClient(id: number): void {
    this.clientService.getClient(id).subscribe((res) => {
      this.clients = res;
    });
  }

  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Quieres eliminar este registro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteClient(id);
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Registro eliminado',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rechazado',
          detail: 'No se elimino',
        });
      },
    });
  }
}
