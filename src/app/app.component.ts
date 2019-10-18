import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {EmployeeService} from './employee.service'
export class Employee{
  id: any;
  Name: string;
  Mobile:string;
  Qualification: string;
  isEdit:boolean;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Welcome to Backoffice';
items: Observable<any[]>;
students: Employee[];
  constructor(private crudService: EmployeeService) {
    //this.items = db.collection('Employees').valueChanges();
    
  }
  ngOnInit(){
       this.crudService.read_Students().subscribe(data => {

      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          ...e.payload.doc.data()
        } as Employee;
      })
      console.log(this.students);

    });
  }
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
    console.log(rowID);
  }
}

 
  
