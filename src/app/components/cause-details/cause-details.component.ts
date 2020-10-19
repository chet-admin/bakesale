import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HoldDataService } from 'src/app/services/holddata.service';
import { switchMap } from 'rxjs/operators';
import { ApiInterface } from 'src/app/services/apiInterface.service';

@Component({
  selector: 'app-cause-details',
  templateUrl: './cause-details.component.html',
  styleUrls: ['./cause-details.component.css']
})
export class  CauseDetailsComponent implements OnInit, OnDestroy {

  selectedUser;
  id: number;
  causeDetails;
  showLoader:boolean = false;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private _apiInterface: ApiInterface,
  ) { }

  // Get id from route and search service data and all the api to get followers
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      this.getAllDeals(this.id)
    });
  }

  // Get selected followers api
  getAllDeals(selectedUser) {
    this.showLoader = true;
    this._apiInterface.get('api/deals/' + selectedUser).subscribe((item) => {
      console.log(item)
      this.causeDetails = item;
      // Object.values(item).forEach(feed => {
      //   this.followersList.push(feed)
      // })
    })
    this.showLoader = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
