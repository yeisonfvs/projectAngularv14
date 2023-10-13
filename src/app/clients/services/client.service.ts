import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
 

  private clientsUrl: string = 'http://localhost:3000/clients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.clientsUrl, this.httpOptions);
  }

  addClient(data: any) {
    return this.http.post(this.clientsUrl, data, this.httpOptions);
  }

  deleteClient(id: number) {
    return this.http.delete(this.clientsUrl + '/' + id);
   
  }

  getClient(id: number): Observable<any> {
    return this.http.get(this.clientsUrl + '/' + id);
  }

  updateClient(data:any, id: number){
    return this.http.put(this.clientsUrl + '/' + id, data, this.httpOptions);
  }

}
