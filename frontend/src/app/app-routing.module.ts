import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'pacientes-form',
    loadChildren: () => import('./pacientes-form/pacientes-form.module').then( m => m.PacientesFormPageModule)
  },
  {
    path: 'formulario/edit/:id',
    loadChildren: () => import('./pacientes-form/pacientes-form.module').then( m => m.PacientesFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
