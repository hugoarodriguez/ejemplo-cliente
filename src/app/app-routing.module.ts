import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './users/pages/buscar/buscar.component';
import { BuscarPorRolComponent } from './users/pages/buscar-por-rol/buscar-por-rol.component';
import { BuscarPorNombreComponent } from './users/pages/buscar-por-nombre/buscar-por-nombre.component';

const routes: Routes = [
    {
        path:'buscar',
        component:BuscarComponent,
        pathMatch:'full'
    },
    {
        path:'buscarporrol',
        component:BuscarPorRolComponent
        
    },
    {
        path:'buscarpornombre',
        component:BuscarPorNombreComponent
        
    },
    
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes) 
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
