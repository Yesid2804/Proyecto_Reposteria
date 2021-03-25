import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductosComponent } from './administracion/vistas/productos/productos.component';
import { TablaComponent } from './administracion/components/tabla/tabla.component';
import { ModalComponent } from './administracion/components/modal/modal.component';
import { FormProductoComponent } from './administracion/vistas/productos/form-producto/form-producto.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ClientesComponent } from './administracion/components/vistas/clientes/clientes.component';
import { FormClientesComponent } from './administracion/components/vistas/clientes/form-clientes/form-clientes.component';
import { DomiciliariosComponent } from './administracion/vistas/domiciliarios/domiciliarios.component';
import { FormDomiciliarioComponent } from './administracion/vistas/domiciliarios/form-domiciliario/form-domiciliario.component';
import { TablaDomiciliarioComponent } from './administracion/components/tabla-domiciliario/tabla-domiciliario.component';
import { ReportesComponent } from './administracion/vistas/reportes/reportes.component';
import { QuejasYReclamosComponent } from './administracion/vistas/quejas-yreclamos/quejas-yreclamos.component';
import { TablaReportesComponent } from './administracion/components/tabla-reportes/tabla-reportes.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TablaQuejasYReclamosComponent } from './administracion/components/tabla-quejas-yreclamos/tabla-quejas-yreclamos.component';
import { UsuarioComponent } from './administracion/vistas/usuario/usuario.component';
import { FormUsuarioComponent } from './administracion/vistas/usuario/form-usuario/form-usuario.component';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './clientes/vistas/inicio/inicio.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NavbarClientesComponent } from './clientes/vistas/navbar-clientes/navbar-clientes.component';
import { CarouselComponent } from './clientes/vistas/carousel/carousel.component';
import { ProductosService } from './administracion/vistas/productos/productos.service';
import {MatMenuModule} from '@angular/material/menu';
import { RegistroEIngresoComponent } from './clientes/vistas/registro-eingreso/registro-eingreso.component';
import { FormIngresoComponent } from './clientes/vistas/form-ingreso/form-ingreso.component';
import { FormRegistroComponent } from './clientes/vistas/form-registro/form-registro.component';
import { NavbarProductosComponent } from './clientes/vistas/navbar-productos/navbar-productos.component';
import { CarouselProductosComponent } from './clientes/vistas/carousel-productos/carousel-productos.component';
import { CarritoComponent } from './clientes/vistas/carrito/carrito.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperClientesComponent } from './clientes/vistas/stepper-clientes/stepper-clientes.component';
import {MatTableModule} from '@angular/material/table';
import { TableDatosClientesComponent } from './clientes/vistas/table-datos-clientes/table-datos-clientes.component';
import { TableResumenCompraComponent } from './clientes/vistas/table-resumen-compra/table-resumen-compra.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    CarouselModule,
    WavesModule,
    MatMenuModule,
    MatStepperModule,
    MatTableModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductosComponent,
    TablaComponent,
    ModalComponent,
    FormProductoComponent,
    ClientesComponent,
    FormClientesComponent,
    DomiciliariosComponent,
    FormDomiciliarioComponent,
    TablaDomiciliarioComponent,
    ReportesComponent,
    QuejasYReclamosComponent,
    TablaReportesComponent,
    TablaQuejasYReclamosComponent,
    UsuarioComponent,
    FormUsuarioComponent,
    InicioComponent,
    NavbarClientesComponent,
    CarouselComponent,
    RegistroEIngresoComponent,
    FormIngresoComponent,
    FormRegistroComponent,
    NavbarProductosComponent,
    CarouselProductosComponent,
    CarritoComponent,
    StepperClientesComponent,
    TableDatosClientesComponent,
    TableResumenCompraComponent,
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
