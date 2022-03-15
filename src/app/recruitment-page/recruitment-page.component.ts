import { Component, OnInit } from '@angular/core';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-recruitment-page',
  templateUrl: './recruitment-page.component.html',
  styleUrls: ['./recruitment-page.component.scss']
})
export class RecruitmentPageComponent implements OnInit {
  
public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

}
