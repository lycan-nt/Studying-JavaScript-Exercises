import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from '../models/placeHolder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  public getFotos(): Observable<any> {
    return this.http.get(this.url)
  }
}
