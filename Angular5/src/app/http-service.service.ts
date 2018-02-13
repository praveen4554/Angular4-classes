import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HttpServiceService {
  public films={};
  private Success:Subject <any>=new Subject<any>();
  constructor(public http: Http) { }
   filmList(){
     this.films=[{director:'Trivikram',movieName:'Attarintikidaredi'},
     {director:'Trivikram',movieName:'Attarintikidaredi'},
     {director:'Trivikram',movieName:'Attarintikidaredi'}]
     return this.films;
   }
   getFilemListfromApi(){
      return this.http.get('http://www.snagfilms.com/apis/films.json?limit=10').map((res=>{
        return res;
      }));
   }
   getFilmListfromApiUsingPromises(){
      return this.http.get('http://www.snagfilms.com/apis/films.json?limit=10').map((res=>{
        return res;
      })).toPromise();
   }
   sendData(name){
      this.Success.next(name);
   }
   readData():Observable<any>{
     return this.Success.asObservable();
   }
}
