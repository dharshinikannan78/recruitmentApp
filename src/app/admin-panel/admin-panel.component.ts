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

  constructor(private registrationService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  adminCredentials(post: any) {
    if (this.loginForm.invalid) {
      alert('Get the Credentials');
    } else {
      this.registrationService.postAdminLoginPanel(post).subscribe((data: any) => {
        this.router.navigate(['table'])
      })
    }
    this.loginForm.reset()
  }
}