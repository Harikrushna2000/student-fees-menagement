import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-detail',
  templateUrl: './all-detail.component.html',
  styleUrls: ['./all-detail.component.css']
})
export class AllDetailComponent implements OnInit {

  constructor(private api:ApiService) { }

  data:any;
  feesdata:any;
  msg:any;
  message:any;

  ngOnInit(): void {
    this.getAllData();
  }

  deletedata(stu_id:any){
    this.api.deleteFeesData(stu_id).subscribe(res=>{
      console.log(res);
      this.msg = res;
      this.message = this.msg.message;
      this.getAllData();
    })
  }

  getAllData(){
    this.api.getFeesData().subscribe(res=>{
      this.data = res;
      this.feesdata = this.data.data;
    })
  }

}
