import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close('http://favcode54.org')">Home Page</button>
      <button ion-item (click)="close('http://facebook/favcode54')">Facebook Page</button>
      <button ion-item (click)="close('http://twitter.com/favcode54')">Twitter Page</button>
      <button ion-item (click)="close('https://github.com/favcode54')">GitHub Repo</button>
      <button ion-item (click)="support()">Support</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}