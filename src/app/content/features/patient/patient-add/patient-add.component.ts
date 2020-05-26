import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, Validators, FormGroup, FormArray, } from '@angular/forms';

@Component({
  selector: 'm-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  formSchema: any;
  SharedConfig: any;
  patientForm: FormGroup;
  formField: any;
  Formcontrols: FormArray;
  selectFormControl:string;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.route.snapshot.data.patientFormResolver);
    this.formSchema = this.route.snapshot.data.patientFormResolver[0][0].formSchema;
    this.patientForm = this.formBuilder.group({
      basicInformation: this.formBuilder.array([this.formBuilder.group([])]),
      address: this.formBuilder.array([this.formBuilder.group([])]),
      phone: this.formBuilder.array([this.formBuilder.group([])]),
      insurance: this.formBuilder.array([this.formBuilder.group([])])
    })
    console.log(this.patientForm);
    this.createControl();
    this.formControl;

  }

  createControl() {
    const group = this.formBuilder.group({});
    console.log(this.patientForm)
    console.log(group);
    this.formSchema.forEach(formField => {
      var field = formField.forms;
      console.log(field);
      field.forEach(fields => {
        console.log(fields);
        const control = this.formBuilder.control(
          { value: fields.value, disabled: fields.disabled },
          this.bindValidations(fields.validations || [])
        );
        group.addControl(fields.name, control);
        console.log(group);
      })
      this.formField = formField.section_name;
      if (this.formField == "Basic Information") {
        console.log(this.formField);
        this.Formcontrols = this.patientForm.get('basicInformation') as FormArray;
        console.log(group);
         console.log(this.Formcontrols);
         this.Formcontrols.removeAt(0);
        this.Formcontrols.push(group);
        console.log(this.Formcontrols);
      }
      else if (this.formField == "Address") {
        this.Formcontrols = this.patientForm.get('address') as FormArray;
        console.log(group);
        console.log(this.Formcontrols);
        this.Formcontrols.removeAt(0);
        this.Formcontrols.push(group);
        console.log(this.Formcontrols);
      }
      else if (this.formField == "Phone") {
        this.Formcontrols = this.patientForm.get('phone') as FormArray;
        console.log(group);
        console.log(this.Formcontrols);
        this.Formcontrols.removeAt(0);
        this.Formcontrols.push(group);
        console.log(this.Formcontrols);
      }
      else {
        this.Formcontrols = this.patientForm.get('insurance') as FormArray;
        console.log(group);
        console.log(this.Formcontrols);
        this.Formcontrols.removeAt(0);
        this.Formcontrols.push(group);
        console.log(this.Formcontrols);
      }
    })
    console.log(this.patientForm);
    
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  checkConfig(config: string, sectionName: string) {

    if (config == "SharedConfig") {
      this.SharedConfig = this.route.snapshot.data.patientFormResolver[2];
      var section: any = [];
      this.SharedConfig.forEach(field => {
        if (sectionName == field.sectionName) {
          section.push(field)
        }
      });
      this.SharedConfig = section;
    }
    else {
      this.SharedConfig = this.route.snapshot.data.patientFormResolver[1];
      var section: any = [];
      this.SharedConfig.forEach(field => {
        if (sectionName == field.sectionName) {
          section.push(field)
        }
      })

      this.SharedConfig = section;

    }


    return true;

  }

  getPatientDetail(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.patientForm.valid) {
      console.log(this.patientForm.value)
    } else {
      this.validateAllFormFields(this.patientForm);
    }

    console.log(event);
    console.log(this.patientForm.value);

    // this.patientService.patientAdd(patientData).subscribe(res=>{
    //   console.log(res);
    // })
  }

  setFormControl(section:string){
    if (section == "Basic Information") {
      this.selectFormControl = 'basicInformation';
    }
    else if (section == "Address") {
      this.selectFormControl = 'address';
    }
    else if (section == "Phone") {
      this.selectFormControl = 'phone';
      
    }
    else {
      this.selectFormControl = 'insurance';
    }
    return true;
  }


  get formControl() {
    console.log(this.patientForm.get(this.selectFormControl) as FormArray);
    return this.patientForm.get(this.selectFormControl) as FormArray;
  }

  addDOM(sectionName: string) {
    console.log(sectionName)
    console.log(this.patientForm.get('basicInformation'));
    console.log(this.patientForm.get('address'));
    console.log(this.patientForm.get('phone'));
    console.log(this.patientForm.get('insurance'));
    // this.formBuild.forEach(field => {
    //   if (sectionName === field.section_name) {
    //     this.formBuild[this.formBuild.indexOf(field)]['forms'].push({ form: [] });
    //     this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].forEach(fields => {
    //       console.log(this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields));
    //       this.formBuild[this.formBuild.indexOf(field)]['forms'][this.formBuild[this.formBuild.indexOf(field)]['forms'].length - 1]['form'].push({
    //         type: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['type'],
    //         label: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['label'],
    //         diabled: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['diabled'],
    //         configName: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['configName'],
    //         sectionName: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['sectionName'],
    //         inputType: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['inputType'],
    //         name: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['name'] + (this.formBuild[this.formBuild.indexOf(field)]['forms'].length - 1),
    //         validations: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['validations'],
    //         value: this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'][this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form'].indexOf(fields)]['value'],
    //       });
    //     })

    //     console.log(this.formBuild[this.formBuild.indexOf(field)]['forms'][0]['form']);
    //     console.log(this.formBuild);

     // }
    //})


  }

  removeDOM(sectionName: string, sectionFormId: number) {
    console.log(sectionName, sectionFormId);
    // this.formBuild.forEach(field => {
    //   if (sectionName === field.section_name) {
    //     console.log(this.formBuild.indexOf(field), field.section_name);
    //     this.formBuild[this.formBuild.indexOf(field)]['forms'].splice(this.formBuild[this.formBuild.indexOf(field)]['forms'][sectionFormId], 1);
    //     console.log(this.formBuild[this.formBuild.indexOf(field)]['forms'][sectionFormId]);
    //     console.log(this.formBuild);
    //   }
    // })

  }

}
