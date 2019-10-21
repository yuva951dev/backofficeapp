import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { HelloComponent } from './hello.component';
import { EmployeeService } from './employee.service';
import { AccountsComponent } from './accounts/accounts.component';
import { MoneySpendListComponent } from './money-spend-list/money-spend-list.component';
import { AccountsService } from './Services/accounts.service';
import { MoneySpentService } from './Services/money-spent.service';
import { routes } from './app.routes';
import { AuthService } from './Services/auth.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(routes),
                  AngularFireModule.initializeApp(environment.firebase),
                   AngularFirestoreModule,AngularFireAuthModule ],
  declarations: [ AppComponent, HelloComponent, AccountsComponent, MoneySpendListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService, AccountsService, MoneySpentService, AuthService]
})
export class AppModule { }
