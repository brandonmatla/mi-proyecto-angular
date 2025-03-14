import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PsicologoComponent } from './componentes/psicologo/psicologo.component';

export const routes: Routes = [
    {path: '',component: InicioComponent},
    {path: 'psicologos',component: PsicologoComponent}
];
