import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
@Component({

  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
export class CandidateRegistrationComponent implements OnInit {
  @Input() public fileUrl: string = '';

  flag: boolean = true;
  attachmentPath: any = [];
  attachmentId: any = [];
  datavale: any;
  response = { dppath: '' };
  message: any;
  progress: any;
  progressView: any;
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
    files: new FormControl('', Validators.required),
    filesResume: new FormControl('', Validators.required),
    additionalfiles: new FormControl('', Validators.required)

  })

  constructor(private detail: ApiService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  submit(candidateDetails: any) {

    this.detail.createPost(candidateDetails)
      .subscribe(data => {
        this.datavale = data
        alert('')
        console.log(data)
        this.form.reset();
        console.log(this.form.value.name)
      })
  }

  registrationLogin() {
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
      //  this.form.reset();
    }
  }


}


