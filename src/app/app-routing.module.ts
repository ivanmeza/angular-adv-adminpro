import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //importo el RoutinModule para despues exportarlo y se pueda usar
//importo los componentes que utilizaran mis rutas
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

//creo mis rutas mediante Routes que importe
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent }, //si escriben algo que on este en mis rutas me manda a notfound
];

@NgModule({
  declarations: [],
  //importo el RoterModule y le mando las rutas
  imports: [
    RouterModule.forRoot(routes), //rutas padres
    PagesRoutingModule, //rutas hijas que importo de otro componente
    AuthRoutingModule, //rutas hijas que importo de otro componente
  ],
  exports: [RouterModule], //exporto el RouterModule que lleva las rutas para poder usarlo en el modulo principal de app
})
export class AppRoutingModule {}
