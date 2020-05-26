import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription, Observable } from 'rxjs';
import { PatientService } from '../patient.service';

declare var $;

@Component({
  selector: 'm-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss'],
})
export class PatientViewComponent implements OnInit,AfterViewInit,OnDestroy {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOption: DataTables.Settings = {};
  dtTriggers = new Subject; 
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  private readonly onDestroy = new Subject<void>();
  patients:any[] = [];
  patientListLoaded: boolean = false;
  searchId: string;
  searchFname: string;
  searchLname: string;
  searchDOB: any;
  searchEmail: any;
  searchPhone: any;


   constructor(private patientservice:PatientService, private router:Router, private route: ActivatedRoute) {
   }
   

    async ngOnInit() {
      this.patients = this.route.snapshot.data.patientResolver;
      console.log(this.patients);
      if(this.patients.length === 0){
        throw new Error('There is no data');
      }
      this.dtOption = {
        pagingType: 'full_numbers',
        pageLength: 10,
        dom: 'tipl',
      };
    
   }

   


   async ngAfterViewInit(){ 
    this.dtTriggers.next();
    console.log(this.datatableElement.dtInstance);
      
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      })
    };
    

  routeToEdit(patientId: any){
    console.log(patientId);
    this.router.navigate(['/patient/edit'], { queryParams: { id: patientId } });
  }

  routeToAddPatient(){
    this.router.navigate(['/patient/add'])
  }

  exportFile(){
    
   
  }

  ngOnDestroy(): void {
    this.dtTriggers.unsubscribe();
    this.onDestroy.next();
  }

}
