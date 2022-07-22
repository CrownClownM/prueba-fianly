import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

/**
 * Componente principal que muestra el componente catalogo y personaje
 */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ '../../catalogo.css']
})

export class DashboardComponent {

  get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  /**
   * Funcion de cierre de sesion
   */
  logout() {
    this.router.navigateByUrl('/');
    this.authService.logout();
  }

}
