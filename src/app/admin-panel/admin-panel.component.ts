import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit {

  entryData: any;
  finalData: any;
  public loginForm!: FormGroup
  submitted = false;
  bearerToken: any;
  constructor(private registrationService: ApiService, private formBuilder: FormBuilder, private router: Router) {
    // this.registrationService.getToken().subscribe(token => {
    //   console.log(token , 'token')
    //   this.bearerToken = token; 
    // })
    // localStorage.setItem('token',this.bearerToken)
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  thisAdminValid() {
    if (this.loginForm.invalid) {
      return true;

    }
    return false;
  }

  get f() { return this.loginForm.controls; }


  adminCredentials(post: any) {
    this.submitted = true;

    console.log(post, 'post')
     if (this.loginForm.valid) {
     } else {
      this.registrationService.postAdminLoginPanel(post)
        this.router.navigate(['table'])
     }
    this.loginForm.reset()
  }

  }
  