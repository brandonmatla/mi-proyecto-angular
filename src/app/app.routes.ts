import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PsicologoComponent } from './componentes/psicologo/psicologo.component';
import { PreciosComponent } from './componentes/precios/precios.component';

export const routes: Routes = [
    {path: '',component: InicioComponent},
    {path: 'psicologos',component: PsicologoComponent},
    {path: 'precios',component: PreciosComponent}
];
