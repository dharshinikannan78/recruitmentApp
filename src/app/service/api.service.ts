import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  postCandidateDetailsUrl = 'https://localhost:44310/api/Registration';
  candidateDetailsUrl = "https://localhost:44310/api/Registration/GetAllEmp";
  adminLoginPanel = 'https://localhost:44310/api/User/Login';
  mail = 'https://localhost:44310/api/Registration/Email?obj=';
  getApplicantId = "https://localhost:44310/api/Registration/applicant?obj=";
  updatestatus = "https://localhost:44310/api/Registration";
  deleteCandidateUrl = "https://localhost:44310/api/Registration/delete?id=";
  uploadFileAttachmentUrl = 'https://localhost:44310/api/Fileattachment';
  getAttachmentDetailstableurl = "https://localhost:44310/api/Fileattachment/atttchmentFile";
  getdownloadAttachmentFileUrl = "https://localhost:44310/api/Fileattachment/data?id=";
  attachmentDetailUrl = "https://localhost:44310/api/Fileattachment/GetAttachmentDetails?candidateId=";

  constructor(private http: HttpClient) { }

  postAdminLoginPanel(adminLoginData: any) {
    return this.http.post(this.adminLoginPanel, adminLoginData);
  }

  postCandidateDetails(candidatePostData: any) {
    return this.http.post(this.postCandidateDetailsUrl, candidatePostData);
  }


  getcandidateDetails() {
    return this.http.get(this.candidateDetailsUrl);
  }

  downloadAttchments(attachment: number) {
    return this.http.get(this.getdownloadAttachmentFileUrl + attachment);
  }

  getAttachmentDetail(candidateId: number) {
    return this.http.get(this.attachmentDetailUrl + candidateId);
  }

  attachmentTableDetails() {
    return this.http.get(this.getAttachmentDetailstableurl);
  }

  uploadFileDetails(uploadattachment: any) {
    return this.http.post(this.uploadFileAttachmentUrl, uploadattachment);
  }
  getMail(Email: any) {
    return this.http.get(this.mail + Email);
  }
  getApllicantIdStatus(getApplicantIds: any) {
    return this.http.get(this.getApplicantId + getApplicantIds);
  }
  updateApi(data: any) {
    return this.http.put(this.updatestatus, data)
  }
  deleteCandidateDetails(candidateDeleteId: any) {
    return this.http.delete(this.deleteCandidateUrl + candidateDeleteId)
  }
}
