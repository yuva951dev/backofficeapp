import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class EmployeeService {

  constructor(private firestore: AngularFirestore) { }
reate_NewStudent(record) {
    return this.firestore.collection('Employees').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('Employees').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('Employees/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Employees/' + record_id).delete();
  }
}