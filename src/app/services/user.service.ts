import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  

  constructor(
      private _http: HttpClient) { }

  public addUser(user: any) {
      return this._http.post(`${baseUrl}/user/`, user);
  }
  
  public getUsers() {
    return this._http.get(`${baseUrl}/user/`);
  }
  
  //récupérer l'utilisateur via l'id
  public getUser(id: any) {
    return this._http.get(`${baseUrl}/user/${id}`);
  }

  //mettre à jour l'utilisateur
  public updateUser(user: any) {
    return this._http.put(`${baseUrl}/user/`, user);
  }
  
  
}
