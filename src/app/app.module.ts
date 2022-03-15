import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecruitmentPageComponent } from './recruitment-page/recruitment-page.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { PopupComponent } from './popup/popup.component';




@NgModule({
  declarations: [
    AppComponent,
    RecruitmentPageComponent,
    SignupComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCommonModule,
    MatOptionModule,
 ReactiveFormsModule 
    




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
