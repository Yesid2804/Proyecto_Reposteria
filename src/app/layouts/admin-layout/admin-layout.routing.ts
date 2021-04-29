import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductosComponent } from 'app/administracion/vistas/productos/productos.component';
import { ClientesComponent } from 'app/administracion/components/vistas/clientes/clientes.component';
import { DomiciliariosComponent } from 'app/administracion/vistas/domiciliarios/domiciliarios.component';
import { ReportesComponent } from 'app/administracion/vistas/reportes/reportes.component';
import { QuejasYReclamosComponent } from 'app/administracion/vistas/quejas-yreclamos/quejas-yreclamos.component';
import { VigilanteGuard } from 'app/clientes/components/vigilante.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'productos',      component: ProductosComponent, canActivate:[VigilanteGuard]},
    { path: 'clientes',      component: ClientesComponent},
    { path: 'quejas-yreclamos',component: QuejasYReclamosComponent},
    { path: 'domiciliarios',  component: DomiciliariosComponent},
    { path: 'reportes',  component: ReportesComponent},
    { path: 'dashboard',      component: DashboardComponent},
    { path: 'user-profile',   component: UserProfileComponent},
    { path: 'table-list',     component: TableListComponent},
    { path: 'typography',     component: TypographyComponent},
    { path: 'icons',          component: IconsComponent},
    { path: 'notifications',  component: NotificationsComponent},
    { path: 'upgrade',        component: UpgradeComponent},
];