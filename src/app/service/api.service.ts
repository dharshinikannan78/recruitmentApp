import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  adminLoginPanel = 'https://localhost:44340/api/Admin/Login';
  postCandidateDetailsUrl = 'https://localhost:44340/api/RegDetail';
  candidateDetailsUrl = "https://localhost:44340/api/RegDetail/GetAllEmp";
  getdownloadAttachmentFileUrl = "https://localhost:44340/api/FileAttachment/data?id=";
  attachmentDetailUrl = "https://localhost:44340/api/FileAttachment/GetAttachmentDetails?candidateId=";
  getAttachmentDetailstableurl = "https://localhost:44340/api/FileAttachment/atttchmentFile";
  uploadFileAttachmentUrl = 'https://localhost:44340/api/FileAttachment';
  mail = 'https://localhost:44340/api/RegDetail/Emila?obj=';
  getApplicantId = "https://localhost:44340/api/RegDetail/applicant?obj=";
  updatestatus = "https://localhost:44340/api/RegDetail";
  deleteCandidateUrl = "https://localhost:44340/api/RegDetail/delete?id=";

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
