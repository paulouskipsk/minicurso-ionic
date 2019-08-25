import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountsReceiveEditPage } from './accounts-receive-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsReceiveEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountsReceiveEditPage]
})
export class AccountsReceiveEditPageModule {}
