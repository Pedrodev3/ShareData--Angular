import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatasService } from '../shared';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h2>Child</h2>

      <!--
    1º First Way - Parent to Child (Input)
      <p>Say {{ childMessage }}</p>
  -->


      <!--
    2º Second Way - Child to Parent (Output)
      <p>Say {{ childMessage }}</p>
      <button (click)="sendMessage()">Send Message</button>
    -->


    <!--
    3º Third Way - Child to Parent
    ("ViewChild" but in this component (ChildComponent) it still used Output)
      <p>Say {{ childMessage }}</p>
      <button (click)="sendMessage()">Send Message</button>
    -->


    <!--
      4º Fourth Way - Any to Any
        <p>
          Message: {{childMessage}}
        </p>
    -->


    <!--
      5º Fifth Way - Passing multiple datas from Child to Parent
    -->


    </div>
  `,
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  /*
  4º Fourth Way - Any to Any (Doesn't matter what component it is called)
    childMessage: String;
  */

  // Parameter used in 4º Fourth Way
  constructor(private data: DatasService) { }


  /*
  1º First Way - Parent to Child (Input)
    @Input() childMessage?: String;
  */


  /*
  2º Second Way - Child to Parent (Output)
    childMessage: string = 'Hola Mundo!';

    @Output() messageEvent = new EventEmitter<string>();

    sendMessage() {
      this.messageEvent.emit(this.childMessage);
    }
  */


  /*
  3º Third Way - Child to Parent
  ("ViewChild" but in this component (ChildComponent) it still used Output)
    childMessage: string = 'Hola Mundo!';

    @Output() messageEvent = new EventEmitter<string>();

    sendMessage() {
    this.messageEvent.emit(this.childMessage);
    }
  */


  ngOnInit(): void {
     /*
      4º Fourth Way - Any to Any (Doesn't matter what component it is called)
        this.data.currentMessage.subscribe(message => this.childMessage = message);
      */
  }


  /*
  5º Fifth Way - Passing multiple datas from Child to Parent
  */
  data1: string = 'This data was from Child Component';
  data2: string = 'Hello';

}
