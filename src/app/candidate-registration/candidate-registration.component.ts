import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
@Component({

  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
export class CandidateRegistrationComponent implements OnInit {
   @Input() public fileUrl: string ='';
  
   flag: boolean = true;
  attachmentPath:any = [];
  attachmentId:any =[];
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
    candidateDetails.AttachmentIds = this.attachmentId.toString();
    candidateDetails.FileLocation = this.attachmentPath.toString();
    
    console.log(candidateDetails.FileLocation)
    console.log(candidateDetails.attachmentIds)
    this.detail.createPost(candidateDetails).subscribe(data => {
      this.datavale = data
      
      console.log(data)
      this.form.reset();
      console.log(this.form.value.name )
    })
  }

  upload = (files: any) => {
    let filetoUpoload = <File>files[0];
    const formData = new FormData();
    formData.append('file', filetoUpoload, filetoUpoload.name);
    formData.append('fileType', 'resume');
   
    this.detail.getFileAttachment(formData).subscribe((data :any )=>{
      console.log(data)
this.attachmentId.push( data.attachmentId)
this.attachmentPath.push(data.attachmentPath)
console.log(this.attachmentPath)

      console.log(this.attachmentId)
    })

   
//     let filetoUpoload = <File>files[0];
//     const formData = new FormData();
//     formData.append('file', filetoUpoload, filetoUpoload.name);
//     this.http.post(this.url, formData).subscribe(data=>{
// formData.append('attamechtype' , this.)
//       console.log(files)
//     })   
   
  }

//   download() {
//     this.detail.getDownload(this.fileUrl).subscribe((event) => {
//       if (event.type === HttpEventType.UploadProgress)
//       this.progress = Math.round((100 * event.loaded) / event.total);
//   else if (event.type === HttpEventType.Response) {
//       this.message = 'Download success.';
//       this.downloadFile(event);
//   }
// });
  
// }
// private downloadFile(data: HttpResponse<Blob>) {
//   const downloadedFile = new Blob([data.body], { type: data.body.type });
//   const a = document.createElement('a');
//   a.setAttribute('style', 'display:none;');
//   document.body.appendChild(a);
//   a.download = this.fileUrl;
//   a.href = URL.createObjectURL(downloadedFile);
//   a.target = '_blank';
//   a.click();
//   document.body.removeChild(a);
// }



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


