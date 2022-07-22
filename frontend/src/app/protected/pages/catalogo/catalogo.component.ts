import { Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick.service';
import { Personajes } from '../../interfaces/personajes.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['../../catalogo.css']
})
export class CatalogoComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  respuesta !: Personajes;

  constructor(private rickService: RickService) { }

  ngOnInit(): void {
    this.rickService.getPersonajes()
      .subscribe(personajes => this.respuesta = personajes);
  }

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
