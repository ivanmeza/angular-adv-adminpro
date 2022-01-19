import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //importo el RoutinModule para despues exportarlo y se pueda usar
//importo los componentes que utilizaran mis rutas
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';

//creo mis rutas mediante Routes que importe
const routes: Routes = [
  {
    path: '',
    component: PagesComponent, //ruta padre
    children: [
      //hijas rutas de PagesComponent
      //rutas que hay cuando ya me logeo
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //si no escriben ninguna ruta me manda a dashboard
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotpagefoundComponent }, //si escriben algo que on este en mis rutas me manda a notfound
];

@NgModule({
  declarations: [],
  //importo el RoterModule y le mando las rutas
  imports: [
    RouterModule.forRoot(routes), //rutas padres
  ],
  exports: [RouterModule], //exporto el RouterModule que lleva las rutas para poder usarlo en el modulo principal de app
})
export class AppRoutingModule {}
