import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BuscarPorRolComponent } from './pages/buscar-por-rol/buscar-por-rol.component';
import { BuscarPorNombreComponent } from './pages/buscar-por-nombre/buscar-por-nombre.component';



@NgModule({
  declarations: [
    BuscarComponent,
    BuscarPorRolComponent,
    BuscarPorNombreComponent
  ],
  exports: [
    BuscarComponent,
    BuscarPorRolComponent,
    BuscarPorNombreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
