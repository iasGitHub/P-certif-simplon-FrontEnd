import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private _http: HttpClient) {}

  // chargement des publications contenues dans la base
  public publications() {
    return this._http.get(`${baseUrl}/publication/`);
  }

  public addPublication(publication : any) {
    return this._http.post(`${baseUrl}/publication/`, publication);
  }

  // supprimer une publication
  public deletePublication(id: any) {
    return this._http.delete(`${baseUrl}/publication/${id}`);
  }

  //récupérer la publication via l'id
  public getPublication(id: any) {
    return this._http.get(`${baseUrl}/publication/${id}`);
  }

  //mettre à jour la publication
  public updatePublication(publication: any) {
    return this._http.put(`${baseUrl}/publication/`, publication);
  }

}
