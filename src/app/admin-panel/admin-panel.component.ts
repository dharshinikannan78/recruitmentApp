import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder, private regiseration: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  dataValue: any;
  
  getUserdetails(post: any) {
    if (this.loginForm.invalid) {
      alert('Get the Credentials');

    } else {

      this.regiseration.getAdminLogin(post).subscribe(data => {
        this.router.navigate(['userdetails'])
      })

    }
    this.loginForm.reset()
  }
}