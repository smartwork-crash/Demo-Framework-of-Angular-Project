import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'm-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit() {
  }

  route(){
    this.nav.navigateByUrl('patient/add');
  }


}
