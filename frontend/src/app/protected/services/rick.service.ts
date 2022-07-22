import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Personajes, Result } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  private Url:string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<Personajes>{
    return this.http.get<Personajes>(this.Url);
  }

  getPersonajesPagina(numero: number): Observable<Personajes>{

    const url = `${this.Url}?page=${numero}`
    return this.http.get<Personajes>(url);
  }

  getPersonajeBuscar(termino : String): Observable<Personajes>{
    const url = `${this.Url}/?name=${termino}`
    return this.http.get<Personajes>(url);
  }

  getPersonajeId(id : String): Observable<Result>{
    const url = `${this.Url}/${id}`
    return this.http.get<Result>(url);
  }

  getPaginas(id : String): Observable<Result>{
    const url = `${this.Url}/${id}`
    return this.http.get<Result>(url);
  }

}
