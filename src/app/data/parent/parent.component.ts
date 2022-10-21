import { DatasService } from './../shared/services/datas.service';
import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>
      Parent

      <!--
      1º First Way - Parent to Child (Input)
        <app-child [childMessage]="parentMessage"></app-child>
      -->


      <!--
      2º Second Way - Child to Parent (Output)
      Message: {{parentMessage}}
      <app-child (messageEvent)="receiveMessage($event)"></app-child>
    -->


    <!--
      3º Third Way - Child to Parent (ViewChild)
        Message: {{parentMessage}}
        <app-child (messageEvent)="receiveMessage($event)"></app-child>
    -->


    <!--
      4º Fourth Way - Any to Any
        <p>Message: {{parentMessage}}</p>
        <app-child>Message: {{parentMessage}}</app-child>
    -->


    <!--
      5º Fifth Way - Passing multiple datas from Child to Parent
    -->
    <app-child #child></app-child>
    {{child.data1}}
    {{child.data2}}

    </h1>
  `,
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent /* 3º Third Way (Não esqueça) - implements AfterViewInit */ implements OnInit {

  /*
  4º Fourth Way - Any to Any (Doesn't matter what component it is called)
    parentMessage: String;
  */

  
  // Parameter used in 4º Fourth Way
  constructor(private data: DatasService) {}


  /*
  1º First Way - Parent to Child (Input)
    parentMessage = '(Parent to Child)';
  */


  /*
  2º Second Way - Child to Parent (Output)
    parentMessage = "Hello World!";

    receiveMessage($event: any) {
      this.parentMessage = $event;
    }
  */


  /*
  3º Third Way - Child to Parent (ViewChild)
    @ViewChild(ChildComponent) child: any;

    parentMessage = "Hello ViewChild";

    ngAfterViewInit() {
      this.parentMessage = this.child.message;
    }

    receiveMessage($event: any) {
      this.parentMessage = $event;
    }
  */


  // NgOnInit used in 4º Fourth Way
  ngOnInit(): void {

    /*
      4º Fourth Way - Any to Any (Doesn't matter what component it is called)
        this.data.currentMessage.subscribe(message => this.parentMessage = message);
    */
  }
}
