import { DatasService } from './../shared/services/datas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  template: `
  <div>
    <h1>Sibling</h1>
    {{siblingMessage}}

    <button (click)="newMessage()">New Message</button>
  </div>
  `,
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  /*
  4º Fourth Way - Any to Any (Doesn't matter what component it is called)
  */
  siblingMessage: string;

  // Parameter used in 4º Fourth Way
  constructor(private data: DatasService) { }

  // NgOnInit used in 4º Fourth Way
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.siblingMessage = message);
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
