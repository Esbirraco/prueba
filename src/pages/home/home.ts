import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {CompassPage} from "../compass/compass";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nombre: string;
  private apellidos: string;

  constructor(public navCtrl: NavController) {

    this.nombre="Rafael";
    this.apellidos="Gallego Alises";

  }

  public goCompass(){
    console.log("goCompass");
    this.navCtrl.push(CompassPage);
  }

}
