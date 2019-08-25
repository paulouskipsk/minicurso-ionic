import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'accounts-receive', loadChildren: './views/accounts-receive/accounts-receive/accounts-receive.module#AccountsReceivePageModule' },
  { path: 'accounts-receive-new', loadChildren: './views/accounts-receive/accounts-receive-new/accounts-receive-new.module#AccountsReceiveNewPageModule' },
  { path: 'accounts-receive-edit', loadChildren: './views/accounts-receive/accounts-receive-edit/accounts-receive-edit.module#AccountsReceiveEditPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
