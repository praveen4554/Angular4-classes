import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  fullName:string;
  firstName:string;
  constructor(public service:HttpServiceService) { 
    this.fullName="praveen";
    this.firstName="suraj";
  }

  ngOnInit() {
  }
changeMethod(event){
  console.log(event);
}
sendData(){
  this.service.sendData(this.fullName);
}
}
