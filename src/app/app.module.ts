import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HelloComponent } from './hello.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AngularFireModule.initializeApp(environment.firebase),
                   AngularFirestoreModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
