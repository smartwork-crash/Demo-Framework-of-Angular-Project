import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PatientService } from './patient.service';

@Component({
  selector: 'm-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnDestroy,OnInit,AfterViewInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dttriggers =new Subject();
  dtOptions: DataTables.Settings = {};
  patients: any = [];

  constructor(private patientservice:PatientService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'tipl'
    };
    this.patientservice.patientList().subscribe(patients => {
        this.patients = patients;
        // Calling the DT trigger to manually render the table
        this.dttriggers.next();
      });
   }

   ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
     });
  }

  ngOnDestroy(): void {
    //Do not forget to unsubscribe the event
    this.dttriggers.unsubscribe();
  }

}
