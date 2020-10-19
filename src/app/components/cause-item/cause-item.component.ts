import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cause-item',
  templateUrl: './cause-item.component.html',
  styleUrls: ['./cause-item.component.css']
})
export class CauseItemComponent implements OnInit {

  @Input() cause;

  constructor(
    private router: Router
  ) {

  }

  // navigate to cause details component
  gotoCauseDetails(key) {
    this.router.navigate(['cause-details', key]);
  }

  ngOnInit(): void {
  }

}


