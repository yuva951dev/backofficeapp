import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Welcome to Backoffice';
items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('Employees').valueChanges();
  }
}
