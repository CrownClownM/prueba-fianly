import { Component } from '@angular/core';
import { Personajes } from '../../interfaces/personajes.interface';
import { RickService } from '../../services/rick.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['../../catalogo.css']
})

export class BusquedaComponent {

  termino: string = '';
  hayError: boolean = false;
  respuesta !: Personajes;

  constructor(private rickService: RickService) { }

  buscar(){
    this.rickService.getPersonajeBuscar(this.termino)
    .subscribe( personajes => {
      this.hayError = false;
      this.respuesta = personajes;
    }, (err) => {
      this.hayError = true;
      Swal.fire('No se encuentra ese personaje', err, 'warning');
    })
  }

  pagina(numero:number){
    this.rickService.getPersonajesPagina(numero)
    .subscribe( personajes => {
      console.log(personajes);
      this.respuesta.results = personajes.results;
    })
  }

}
