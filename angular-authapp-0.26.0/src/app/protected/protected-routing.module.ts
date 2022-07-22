import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: CatalogoComponent},
      { path: 'buscar', component: BusquedaComponent },
      { path: 'personaje/:id', component: PersonajeComponent},
      { path: '**', redirectTo: '' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
