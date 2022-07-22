import { Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick.service';
import { Info, Result, Personajes } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['../../catalogo.css']
})
export class CatalogoComponent implements OnInit {

  respuesta !: Personajes;

  constructor(private rickService: RickService) { }

  ngOnInit(): void {
    this.rickService.getPersonajes()
      .subscribe(personajes => this.respuesta = personajes);
  }

  pagina(numero:number){
    this.rickService.getPersonajesPagina(numero)
    .subscribe( personajes => {
      console.log(personajes);
      this.respuesta.results = personajes.results;
    })
  }

}
