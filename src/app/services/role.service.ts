import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _http: HttpClient) { }

  // ajout catégorie
  public addRole(role: any) {
    return this._http.post(`${baseUrl}/role/`, role);
  }
}
