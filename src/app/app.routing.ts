import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './administracion/vistas/usuario/usuario.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { InicioComponent } from './clientes/vistas/inicio/inicio.component';
import { RegistroEIngresoComponent } from './clientes/vistas/registro-eingreso/registro-eingreso.component';
import { CarritoComponent } from './clientes/vistas/carrito/carrito.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'registro-eingreso',
    component: RegistroEIngresoComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },


  {
    
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
