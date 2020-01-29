import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Child2Component } from '../child2/child2.component';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  // template: `
  //     <button (click)="sendMessage()">Send Message</button>
  // `,
  styleUrls: ['./child1.component.scss'],
  providers: [Child2Component ]
})
export class Child1Component implements OnInit {

  transNum: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private child2Component: Child2Component,
    private router: Router) { }

  sendMessage(name: string) {
    this.messageEvent.emit('Emit: ' + name);
    this.transNum = this.transNum + ' >> ' + name;
    this.child2Component.updateTrans();
  }

  ngOnInit() {
    this.transNum = 'Hello';
  }

  public onTap() {
    console.log('in onTamp()');
    const navigationExtras: NavigationExtras = {
        queryParams: {
          firstname: 'Chad - ',
          lastname: 'Foley'
        }
    };
    this.router.navigate(['app-child2'], navigationExtras);
}

}
