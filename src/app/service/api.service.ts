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

}
