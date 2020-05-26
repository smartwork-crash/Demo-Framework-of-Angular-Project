import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { PatientService } from "../patient.service";  

  
@Injectable()  
export class PatientResolve implements Resolve<any[]> {  
  constructor(private patientservice: PatientService) {}  
  
  resolve(): Observable<any[]> {  
    return this.patientservice.patientList() 
  }  
}  