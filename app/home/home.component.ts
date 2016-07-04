import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {

  ngOnInit() {
    console.log('Home activated')
  }

}
