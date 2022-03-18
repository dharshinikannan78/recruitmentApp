import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Pipe,PipeTransform } from '@angular/core';
@Component({
  selector: 'app-admin-candidate-table',
  templateUrl: './admin-candidate-table.component.html',
  styleUrls: ['./admin-candidate-table.component.scss']
})
export class AdminCandidateTableComponent implements OnInit {
  downloadPath:any =[];
  valueArray:any;
showModel:any
attachmentFile:any;
  dataValue: any;
  fileAttachment:any;
  listDataArray =[] ;
  searchValue: string = '';
  message: any;
  progress: any;
  @Output()  uploadFile = new EventEmitter();
 
  constructor(private regiseration: ApiService,private http:HttpClient) { }

  ngOnInit(): void {
    this.regiseration.getData().subscribe((data:any) => {
      this.dataValue = data;
    
     
     this.regiseration.getAttachment().subscribe(dataAttach=>{
       this.valueArray = dataAttach
             })

    })

  }
// getFile(){
//     {
//       console.log(data)
//     })
// }
  onClick(){
    
    this.showModel = true;
    console.log('data')

  }

  download( id: number,  contentType:string) {
    return this.http.get('https://localhost:44340/api/FileAttachment/data/${id}',  {responseType:'blob'})
    .subscribe((result:Blob)=>{
      const blob = new Blob([result], {type:contentType })
      const url = window.URL.createObjectURL(blob)
      window.open(url);
      console.log('success')
    })
  }
}
