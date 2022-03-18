import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataUser: any;
  
  url = 'https://localhost:5001/api/Values';
 
  adminLogin='https://localhost:5001/api/AdminController1/Login';
  urlpostFileAttachment = 'https://localhost:5001/api/Values';
  urlGetFileAttachment ='https://localhost:5001/api/Values';
  constructor(private http: HttpClient) { }

  //   getpostFileAttachment(postFile:any){
  //   return this.http.post(this.urlpostFileAttachment, postFile);
  //    }
  getAdminLogin(postData: any){
    return this.http.post(this.adminLogin, postData);

  }
  getFunction(post: any) {
    return this.http.post(this.url, post);
  }
 
  // getFileAttachmentData() {
  //   return this.http.get(this.urlGetFileAttachment);

  // }
  popFileaAttachment= "https://localhost:44340/api/FileAttachment/atttchmentFile"
  regstrationDetails  = "https://localhost:44340/api/RegDetail/GetAllEmp"
  regPost = 'https://localhost:44340/api/RegDetail';
  downloadUrl ="https://localhost:44340/api/FileAttachment/data?fileUrl";
  fileAttachmenturl = 'https://localhost:44340/api/FileAttachment';
  
  getFileAttachment(postFile:any){
    return this.http.post(this.fileAttachmenturl, postFile);
  }
  createPost(post: any) {
    return this.http.post(this.regPost, post);
  }
  getData() {
    return this.http.get(this.regstrationDetails);

  }
  getAttachment(){
    return this.http.get(this.popFileaAttachment);
  }
  getDownload(fileUrl: string){
    return this.http.get(this.downloadUrl,{
      reportProgress: true,
      responseType: 'blob',
    });
  }
}
