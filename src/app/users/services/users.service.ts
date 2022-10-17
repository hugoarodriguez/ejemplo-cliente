import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusquedaUsers, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL: string = "https://servidorapihr.herokuapp.com/api/users";

  constructor(private http:HttpClient) { }

  buscarUsuarios(): Observable<BusquedaUsers>{
    return this.http.get<BusquedaUsers>(this.apiURL);
  }
}
