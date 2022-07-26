import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from '../interfaces/auth.interface';

/**
 * Definicion del servicio para obtener la informacion del backend
 */

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient ) { }

  /**
   * Realiza el registro con la informacion de los campos del formulario
  */

  registro( name: string, lastName:string, email: string, password: string, dateBirth: string, gender: string ) {

    const url  = `${ this.baseUrl }/auth/new`;
    const body = { name, lastName, email, password, dateBirth, gender};

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if ( ok ) {
            localStorage.setItem('token', token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );

  }

  /**
   * Realiza el login con la informacion de los campos del formulario
  */

  login( email: string, password: string ) {

    const url  = `${ this.baseUrl }/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );
  }

  /**
   * Realiza la validacion del token en el localstorage
  */

  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.token! );
            this._usuario = {
              name: resp.name!,
              lastName: resp.lastName!,
              dateBirth: resp.dateBirth!,
              gender: resp.gender!,
              uid: resp.uid!,
              email: resp.email!
            }

            return resp.ok;
          }),
          catchError( err => of(false) )
        );

  }

  /**
   * Realiza el cierre de sesion del usuario
  */

  logout() {
    localStorage.clear();
  }


}
