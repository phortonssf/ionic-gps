import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }
  
  goLambda(){
      this._http.get('/.netlify/functions/random')
        .subscribe( res => console.log("res", res) )
  }
}