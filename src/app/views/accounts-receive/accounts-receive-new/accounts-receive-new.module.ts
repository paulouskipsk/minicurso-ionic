import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountsReceiveNewPage } from './accounts-receive-new.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsReceiveNewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountsReceiveNewPage]
})
export class AccountsReceiveNewPageModule {}
