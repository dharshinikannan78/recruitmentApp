import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
@Component({

  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
export class CandidateRegistrationComponent implements OnInit {

  radioButton: boolean = true;
  attachmentPath: any = [];
  attachmentId: any = [];
  candidateRegistrationalue: any;
  formData: any;

  form = new FormGroup({
    Name: new FormControl('', Validators.required),
    EmailId: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    Experience: new FormControl('', Validators.required),
    Fresher: new FormControl('', Validators.required),
    SkillSet: new FormControl('', Validators.required),
    EducationDetails: new FormControl('', Validators.required),
    CurrentCtc: new FormControl('', Validators.required),
    ExpectedCtc: new FormControl('', Validators.required),
    Availabilty: new FormControl('', Validators.required),
    PassPort: new FormControl('', Validators.required),
    CountryResiding: new FormControl('', Validators.required),
    Citizenship: new FormControl('', Validators.required),
    CurrentRole: new FormControl('', Validators.required),
    CurrentCity: new FormControl('', Validators.required),
    PositionApplied: new FormControl('', Validators.required),
    IdentityCardNumber: new FormControl('', Validators.required),
    filesResume: new FormControl(''),
    files: new FormControl(''),
    additionalfiles: new FormControl('')

  })

  constructor(private registrationService: ApiService) {
  }

  ngOnInit(): void {
  }

  candidateFormSubmission(candidateDetails: any) {
    candidateDetails.AttachmentIds = this.attachmentId.toString();
    candidateDetails.FileLocation = this.attachmentPath.toString();
    this.registrationService.postCandidateDetails(candidateDetails).subscribe(data => {
      this.candidateRegistrationalue = data;
      this.form.reset();
    });
  }

  uploadcandidateFile = (files: any, fileType: string) => {
    let filetoUpoload = <File>files[0];
    const formData = new FormData();
    formData.append('file', filetoUpoload, filetoUpoload.name);
    formData.append('fileType', fileType);
    this.registrationService.uploadFileDetails(formData).subscribe((data: any) => {
      this.attachmentId.push(data.attachmentId);
      this.attachmentPath.push(data.attachmentPath);

    });
  }

  candidateLogin() {
    console.log('data')
    if (this.form.invalid) {
      alert('Fill the Required area')
    }
    else {
      Swal.fire({
        text: 'Register Sucessfully!',
        icon: 'success',
        timer: 1500
      });
    }
  }
}


