import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { forkJoin }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  defaultUrl: string = 'http://localhost:3000/';
  patientShortList: string = '';
  patientAddFormUrl: string = '';
  patientAddList: string = '';
  patientConfig: string = '';
  sharedConfig: string = '';


  constructor(private http:HttpClient) { }

  patientList(){
    return this.http.get(this.defaultUrl+ this.patientShortList).pipe(map(res=>res['patientDetails'] || {}));
  }

  patientAddForm(){
     
    return forkJoin(
      this.http.get(this.defaultUrl+ this.patientAddFormUrl),
      this.http.get(this.defaultUrl+ this.patientConfig),
      this.http.get(this.defaultUrl+ this.sharedConfig)
     ).pipe(map(res=>res));
  }

  patientAdd(patientData: any[]){
    return this.http.post(this.defaultUrl+this.patientAddList,patientData).pipe(map(res=>res));
  }

  pateintUpdate(changeData: any){
    return this.http.put('http://localhost:3000',changeData).pipe(map(res=>res));
  }
}
