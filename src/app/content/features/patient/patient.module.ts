import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { MaterialModule } from '../../../material.module';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './patient.service';
import { PatientResolve} from './patient-view/patient.resolve';
import { PatientAddResolve } from './patient-add/patient.resolve';
import { ColumnSpecificSearch } from '../../../core/pipes/filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    PerfectScrollbarModule,
    HttpClientModule,
    RouterModule.forChild([
			{
				path: '',
				component: PatientComponent
      },
      {
        path: 'add',
        component: PatientAddComponent,
        resolve:{         
          patientFormResolver:PatientAddResolve  
        } 
      },
      {
        path: 'edit',
				component: PatientEditComponent
      },
      {
        path: 'view',
        component: PatientViewComponent,
        resolve:{         
          patientResolver:PatientResolve  
        } 
      }
		])
  ],
  declarations: [PatientComponent, PatientAddComponent, PatientEditComponent, PatientViewComponent,ColumnSpecificSearch],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    PatientService,
    PatientResolve,
    PatientAddResolve

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientModule { }
