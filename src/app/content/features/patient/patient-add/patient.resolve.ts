import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { PatientService } from "../patient.service";  

  
@Injectable()  
export class PatientAddResolve implements Resolve<any[]> {  
  constructor(private patientservice: PatientService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<any[]> { 
    return this.patientservice.patientAddForm();
  }  
}  