import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-admin-candidate-table',
  templateUrl: './admin-candidate-table.component.html',
  styleUrls: ['./admin-candidate-table.component.scss']
})
export class AdminCandidateTableComponent implements OnInit {

  applicant:any;
  getCandidateList: any;
  searchValue: any;

  constructor(private registrationService: ApiService) { }

  ngOnInit(): void {
    this.registrationService.getcandidateDetails().subscribe((data: any) => {
      this.getCandidateList = data;
    });
  }
adminapplicantStatus(status:any){
  this.registrationService.postCandidateDetails(status).subscribe(data =>{

    this.applicant= data
    console.log(this.applicant)
  })
}

}
