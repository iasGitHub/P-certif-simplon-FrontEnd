import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  

  constructor(private _http: HttpClient) { }

  public categories() {
    return this._http.get(`${baseUrl}/category/`);
  }

  //récupérer la publication via l'id
  public getCategory(id: any) {
    return this._http.get(`${baseUrl}/category/${id}`);
  }

  // ajout catégorie
  public addCategory(category: any) {
    return this._http.post(`${baseUrl}/category/`, category);
  }

  //mettre à jour la publication
  public updateCategory(category: any) {
    return this._http.put(`${baseUrl}/category/`, category);
  }

  // supprimer une catégorie
  public deleteCategory(id: any) {
    return this._http.delete(`${baseUrl}/category/${id}`);
  }

}
