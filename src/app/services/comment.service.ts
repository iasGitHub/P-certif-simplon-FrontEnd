import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private _http: HttpClient
  ) {}

  public getCommentsOfPublication(id : any) {
    return this._http.get(`${baseUrl}/comment/publication/${id}`);
  }
}
