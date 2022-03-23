import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-attachmnets',
  templateUrl: './attachmnets.component.html',
  styleUrls: ['./attachmnets.component.scss']
})
export class AttachmnetsComponent implements OnInit {


  @Input() candidateId: any;
  attachmentDetails: any;

  constructor(private registrationService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.registrationService.getAttachmentDetail(this.candidateId).subscribe(data => {
      this.attachmentDetails = data;
      console.log(data)
    });
  }

  downloadAttachment(id: number) {
    return this.http.get('https://localhost:44340/api/FileAttachment/data?id=' + id, { responseType: 'blob' })
      .subscribe((result) => {
        console.log(result)
        const fileName = result.type;
        const blob = new Blob([fileName], { type: "application/octet-stream" })
        console.log(blob)
        const url = window.URL.createObjectURL(blob)
        // window.open(url,fileName);
        FileSaver.saveAs(url, fileName);
        console.log('success')
      })
  }

}
