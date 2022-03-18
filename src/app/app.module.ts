import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCandidateTableComponent } from './admin-candidate-table/admin-candidate-table.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    CandidateRegistrationComponent,
    AdminPanelComponent,
    AdminCandidateTableComponent
    
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
    ReactiveFormsModule,
    HttpClientModule,
    // FormsModule
    Ng2SearchPipeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
