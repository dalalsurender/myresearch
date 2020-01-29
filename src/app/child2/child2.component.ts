import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  newTransNum: string;
  @Input() reviewTransNum: string;

  firstname: string;
  lastname: string;


  public constructor(private route: ActivatedRoute) {
      console.log('in child2.constructor: ' + this.route.queryParams);
      this.route.queryParams.subscribe(params => {
      this.firstname = params.firstname;
      this.lastname = params.lastname;
  });
}

  ngOnInit() {
  }

  public updateTrans() {
    console.log('in updateTrans');
    this.newTransNum = 'New Value: ' + this.reviewTransNum;
    console.log('newTransNum = ' + this.newTransNum);
  }
}
