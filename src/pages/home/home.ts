import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UserService } from '../../app/http.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    private geolocation: Geolocation,
    private _user : UserService
  ) {
     console.log("okay", this.geolocation)
    

     this.geolocation.getCurrentPosition().then((resp) => {
         console.log(resp)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  // async lambda(){
  //   let result = await fetch('/.netlify/functions/random')
  //   console.log(result, "1st")
  //   let x = await result.then( res => res.json())
  //   console.log(x, "2nd")
  // }


 async lambda(){
  try { 
    let x = await (await fetch('/.netlify/functions/random')).json() 
    console.log(x)
  } 
  catch (e) { console.log(e)}
  }

 

  // lambda(){
  //   this._user.goLambda()
  // }

    
}
