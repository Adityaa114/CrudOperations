import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../module/client';

@Injectable({
  providedIn: 'root'
})
export class ManagemantService {

  constructor(private http:HttpClient) { }

  apiUrl!:'http://localhost:3000/Client'

  getAll(){
    return this.http.get<Client[]>('http://localhost:3000/Client')
  }

  register(data:Client){
    return this.http.post('http://localhost:3000/Client',data)
  }

  update(data: Client, userIdToUpdate: number){
    return this.http.put<Client>(`http://localhost:3000/Client/${data.id}`,data);
  }

  getClient(id:number){
    return this.http.get<Client>(`http://localhost:3000/Client/${id}`)
  }

  delete(id:number){
    return this.http.delete<Client>(`http://localhost:3000/Client/${id}`)
  }

}
