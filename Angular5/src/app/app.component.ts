import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public http:HttpServiceService){
      var result = http.filmList();
      console.log(result);
  }
  ngOnInit(){
    this.http.getFilemListfromApi().subscribe((res)=>{
        console.log(res);
    });
  }
}
