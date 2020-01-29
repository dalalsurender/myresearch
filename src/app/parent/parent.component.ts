import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // template: `
  //   Message: {{message}}
  //   <app-child1 (messageEvent)="receiveMessage($event)"></app-child1>
  //   <app-child2 [childMessage]="message"></app-child2>
  // `,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

 searchTransNum: string;
 SearchSelectedTab = 0;

 constructor() { }

  ngOnInit() {
  }

  receiveMessage($event: string) {
    this.searchTransNum = $event;
  }

}
