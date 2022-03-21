import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css'],
})
export class CreatComponent implements OnInit {
  constructor(private api: ApiService, private router: ActivatedRoute) {}

  data: any;
  feespay: any;
  message: any;
  errMsg: any;
  getparamid: any;
  result: any;
  udata: any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('stu_id');
    this.api.singelFeesData(this.getparamid).subscribe((res) => {
      this.result = res;
      this.feesForm.patchValue({
        firstname: this.result.data[0].firstname,
        lastname: this.result.data[0].lastname,
        email: this.result.data[0].email,
        mobile_no: this.result.data[0].mobile_no,
        stu_fees: this.result.data[0].stu_fees,
      });
    });
  }

  feesForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile_no: new FormControl('', Validators.required),
    stu_fees: new FormControl('', Validators.required),
  });

  feesData() {
    this.api.postFeesData(this.feesForm.value).subscribe((res) => {
      this.data = res;
      this.feespay = this.data.data;
      this.message = this.data.message;
    });
    this.errMsg = this.data.err;
  }

  reset() {
    this.feesForm.reset();
  }

  updateData() {
    if (this.feesForm.valid) {
      this.api
        .updateFeesData(this.feesForm.value, this.getparamid)
        .subscribe((res) => {
          this.udata = res;
          this.message = this.udata.message;
        });
    } else {
      this.errMsg = "Pleas Enter All Data!!";
    }
  }
}
