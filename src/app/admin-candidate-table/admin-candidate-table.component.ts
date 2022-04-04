import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-candidate-table',
  templateUrl: './admin-candidate-table.component.html',
  styleUrls: ['./admin-candidate-table.component.scss']
})
export class AdminCandidateTableComponent implements OnInit {

  popup: boolean = false;
  isEditTable: boolean = false;
  candidateDetails: any;
  showModal: boolean = false;
  applicant: any;
  getCandidateList: any;
  searchValue: any;
  enableEdit = false;
  enableEditIndex = null;
  applicantStatus: any
  currentSalary: any;
  skillSets: any;
  deleteId: any;
  attachmentDetails: any;

  constructor(private registrationService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.registrationService.getcandidateDetails().subscribe((data: any) => {
      this.getCandidateList = data;
    });
  }

  onSelect() {
    this.isEditTable = true;
  }

  getRegisterPage() {
    this.router.navigate([''])
  }

  onEditSave() {
    this.isEditTable = true;
    this.registrationService.updateApi(this.candidateDetails).subscribe((data: any) => {
      console.log(data, 'edit')
    });
    this.isEditTable = false;
  }

  onDeleteDetails(event: any) {
    this.deleteId = event.target;
    console.log(this.deleteId, 'deleye')
    this.registrationService.deleteCandidateDetails(this.deleteId).subscribe((data: any) => {
      console.log(data, 'edit')
    });
    this.isEditTable = false;
  }

  getCandidateDetails(data: any) {
    this.candidateDetails = data;
    this.attachmentDetails = [];
    console.log(data, 'data')
    this.showModal = true;
    //FileAttachment Api call
    //data
    this.registrationService.getAttachmentDetail(data.candidateId).subscribe(data => {
      this.attachmentDetails = data;
      console.log(data, 'data')
    });
  }



  onChange(event: any) {
    this.applicantStatus = event.target.value;
    this.candidateDetails = {
      ...this.candidateDetails,
      applicantStatus: this.applicantStatus
    }
    this.registrationService.updateApi(this.candidateDetails).subscribe((data: any) => {
      console.log(data, 'applcantStatus')
      Swal.fire({
        text: 'Register Sucessfully!',
        icon: 'success',
        timer: 1000
      });
    });

    console.log('candidateDetails', this.candidateDetails)
  }
}
