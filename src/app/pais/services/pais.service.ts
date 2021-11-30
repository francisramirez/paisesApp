import { Country } from './../interaces/pais.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  buscarPais(criterio:string):Observable<Country[]>{

    const url: string = `${this.apiUrl}name/${criterio}`;

    return this.http.get<Country[]>(url);
  }
}
