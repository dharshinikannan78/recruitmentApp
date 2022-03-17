import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

}