import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Tienda/tiendaShopdown',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login/loginShopdown',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'Register/registerShopdown',
    loadChildren: () => import('./Register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'Tienda/tiendaShopdown',
    loadChildren: () => import('./Tienda/tienda.module').then( m => m.TiendaModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
