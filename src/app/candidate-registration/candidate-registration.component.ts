import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({

  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
export class CandidateRegistrationComponent implements OnInit {
  datavalue: any;
  flag: boolean = true;
  public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder) { }
list =[]
  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      Name:['',Validators.required],
      EmailId:['',Validators.required],
      phoneNumber:['',Validators.required],
      IdentityCardnumber:['',Validators.required],
      PassPort:['',Validators.required],
      EducationDetails:['',Validators.required],
      skillSet:['',Validators.required],
      Experience:['',Validators.required],
      Fresher:['',Validators.required],
      Availability:['',Validators.required],
      currentCity:['',Validators.required],
      CurrentCtc:['',Validators.required],
      ExpectedCtc:['',Validators.required],
      CurrentRole:['',Validators.required],
      PositionApplied:['',Validators.required],
      CountryResiding:['',Validators.required],
      Citizenship:['',Validators.required],
      filesResume:['',Validators.required],
      files:['',Validators.required],
      additionalfiles:['',Validators.required]
    })
    
  }
  submit(form:any){
    this.loginForm=this.datavalue

  console.log(this.loginForm)
  this.loginForm.reset();

  }
  // submit(candidateDetails: any) {
  //   this.detail.createPost(candidateDetails).subscribe(data => {
  //     this.datavale = data
      

  //     console.log(data)
  //     this.loginForm.reset();
  //     console.log(this.loginForm.value.name )
  //   })
  // }
  
  showMode(){
    this.flag = true;
  };

  onlogin() {
    console.log(this.loginForm)
    if (this.loginForm.invalid) {
      alert('Register Unsucessfully!')
    
    }
    else {
      this.loginForm.reset();
    }
    console.log(this.loginForm)
  }
  }


