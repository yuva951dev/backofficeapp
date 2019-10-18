import { Routes } from '@angular/router';
import {AppComponent } from './app.component';
import {AccountsComponent } from './accounts/accounts.component';
import { MoneySpendListComponent } from './money-spend-list/money-spend-list.component';
export const routes: Routes = [
  { path: '', component: AccountsComponent },
  // { path: '/accounts', component: Accounts },
  // { path: '/spendlist', component: MoneySpendListComponent },
  {path: 'spendlist',
    component: MoneySpendListComponent,
    children: [
      { path: '', component: MoneySpendListComponent },
     // { path: 'item/:id', component: AboutItemComponent }
    ]},
  
];