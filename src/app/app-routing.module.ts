import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { RecruitmentPageComponent } from './recruitment-page/recruitment-page.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path: 'login', component: RecruitmentPageComponent},
  {path:'',component:SignupComponent},
  {path:'popup',component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
