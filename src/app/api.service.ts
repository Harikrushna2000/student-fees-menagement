import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/studentfees"
  constructor(private http:HttpClient) { }

  getFeesData(){
    return this.http.get(`${this.url}`);
  }

  postFeesData(data:any){
    return this.http.post(`${this.url}`,data)
  }

  deleteFeesData(id:any){
    let stu_id = id;
    return this.http.delete(this.url + `/${stu_id}`)
  }

  singelFeesData(id:any){
    let stu_id = id;
    return this.http.get(this.url + `/${stu_id}`)
  }

  updateFeesData(data:any,id:any){
    let stu_id = id;
    return this.http.put(this.url + `/${stu_id}`,data)
  }
}
