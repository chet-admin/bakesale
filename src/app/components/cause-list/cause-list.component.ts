import { Component, OnInit } from '@angular/core';
import { ApiInterface } from 'src/app/services/apiInterface.service';
import { HoldDataService } from 'src/app/services/holddata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cause-list',
  templateUrl: './cause-list.component.html',
  styleUrls: ['./cause-list.component.css']
})
export class CauseListComponent implements OnInit {

  causeTemp = [];
  showLoader: boolean = false;
  workFlow: Subscription;
  temp = 'newstories.json';
  constructor(
    private _apiInterface: ApiInterface,
    private _holddataservice: HoldDataService,
  ) { }

  ngOnInit(): void {

    this.getUserData();
  }

//get Cause details from bakesale for good api
  getUserData() {
    this.causeTemp = [];
    if (this._holddataservice.getCause() && (this._holddataservice.getCause()).length > 0) {
      this.causeTemp =  this._holddataservice.getCause();
    } else {
      this._apiInterface.get('api/deals').subscribe((item) => {
        Object.values(item).forEach(feed => {
          this.causeTemp.push(feed);
        })
        this._holddataservice.setCause(this.causeTemp);
      })
    }
  }

  ngOnDestroy(): void {
    if (this.workFlow) {
      this.workFlow.unsubscribe();
    }
  }
}
