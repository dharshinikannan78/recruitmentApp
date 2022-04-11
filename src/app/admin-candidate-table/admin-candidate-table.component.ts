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

  Status: any;
  particularDetails: any
  raisedElevation = 100;
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
  isArchive: boolean = false;
  isDetail: any
  remarks: any
  isRemark: boolean = true
  expectedCtc: any
  constructor(private registrationService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDetails();
  }


  onsaveRemark(event: any) {
    this.remarks = event.target.value;
    this.candidateDetails = {
      ...this.candidateDetails,
      remarks: this.remarks
    }
    console.log(this.candidateDetails, 'geetha')
  }

  getarchiveDetails() {
    this.Status = false;
    this.Status = "ARCHIVED"
    this.registrationService.archiveStatus("archived").subscribe((data: any) => {
      console.log('data', data)
      this.getCandidateList = data;
    })
  }
  getAllDetails() {
    this.Status = false;
    this.registrationService.getcandidateDetails().subscribe((data: any) => {
      this.getCandidateList = data;
    });
  }

  onSelect() {
    this.isEditTable = true;
  }

  IsArchieved() {
    const data = {
      ...this.particularDetails,
      status: "archived", isArchived: true
    }
    this.registrationService.updateApi(data).subscribe((data: any) => {
      console.log('dataArchive', data)
      Swal.fire({
        text: 'Move to Arichved!!!',
        confirmButtonText: "Ok",
        icon: 'success',
        timer: 25000
      });
      this.showModal = false;
      this.getAllDetails();
    })
  }



  getRegisterPage() {
    this.router.navigate([''])
  }

  onEditSave(event: any) {
    this.isEditTable = true;
    this.expectedCtc = event.target.value;
    this.candidateDetails = {
      ...this.candidateDetails,
      expectedCtc: this.expectedCtc
    }
    this.isEditTable = false;
  }


  getCandidateDetails(data: any) {
    this.candidateDetails = data;
    this.attachmentDetails = [];
    console.log(data, 'data')
    this.showModal = true;
    this.particularDetails = data;

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
    console.log('candidateDetails', this.candidateDetails)
  }

  saveEditCandidateDetails() {
    this.registrationService.updateApi(this.candidateDetails).subscribe((data: any) => {
      console.log(data, 'Final ')
      Swal.fire({
        text: 'SuccessFully Added!',
        icon: 'success',
        timer: 1000
      });
    });
  }


}
