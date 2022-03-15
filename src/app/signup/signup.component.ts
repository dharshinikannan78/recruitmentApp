import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  flag: boolean = true;
  public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      userName:['',Validators.required],
      emailId:['',Validators.required],
      number:['',Validators.required],
      adhaarcardnumber:['',Validators.required],
      passport:['',Validators.required],
      education:['',Validators.required],
      skill:['',Validators.required],
      fresherOrExperience:['',Validators.required],
      availability:['',Validators.required],
      currentCity:['',Validators.required],
      currentCtc:['',Validators.required],
      expectedCtc:['',Validators.required],
      currentposition:['',Validators.required],
      positionApplied:['',Validators.required],
      countryresiding:['',Validators.required],
      citizenship:['',Validators.required],
      resume:['',Validators.required],
      anyCert:['',Validators.required],
      additionalCert:['',Validators.required]
    })
    
  }
  showMode(){
    this.flag = true;
  }

}
