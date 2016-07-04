import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/profile/profile.component.html'
})

export class ProfileComponent {

  OnInit() {
    console.log('this is profile comp')
  }

  games = ['fifa 2016', 'halo 4', 'plague'];

  constructor() {

  }

}
