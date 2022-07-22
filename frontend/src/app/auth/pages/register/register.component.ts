import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

/**
 * Componente encargado del registro de usuarios
 */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ '../auth.css']
})

export class RegisterComponent {

  /** 
   * Definicion del formulario reactivo con parametros predeterminados para mayor facilidad de pruebas al hacer un registro
  */

  miFormulario: FormGroup = this.fb.group({
    name:     ['Test', [ Validators.required ]],
    lastName: ['Medina', [ Validators.required ]],
    email:    ['test@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6)]],
    dateBirth:['', [ Validators.required]],
    gender:   ['', [ Validators.required]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }


  /**
   * Funcion que se encarga de tomar los datos del formulario de registro y hacer la peticion de registro para un usuario
   */
  registro() {
    const { name, lastName, email, password, dateBirth, gender } = this.miFormulario.value;
    this.authService.registro( name, lastName, email, password, dateBirth, gender )
      .subscribe( ok => {
        if ( ok === true ) {
          this.router.navigateByUrl('/home');
          Swal.fire('Cuenta creada correctamente', ok, 'success');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }



}
