import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {


  public loginForm!: FormGroup
  submitted = false;

  constructor(private registrationService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

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
    if (this.loginForm.invalid) {
    } else {
      this.registrationService.postAdminLoginPanel(post).subscribe((data: any) => {
        this.router.navigate(['table'])
      })
    }
    this.loginForm.reset()
  }


}