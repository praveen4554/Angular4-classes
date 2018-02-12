import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fullName:string;
  @Input() firstName:string;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  emitEvent(){
    this.change.emit('Angular5');
  }

}
