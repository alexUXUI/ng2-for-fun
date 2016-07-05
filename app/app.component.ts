import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './games/game-list.component';
import { GameDetailComponent } from './games/game-details/game-details.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
      <h1 (click)="sayHi()">My First Angular 2 App</h1>
      <nav>
         <a [routerLink]="['Home']">Home</a>
         <a [routerLink]="['Profile']">Profile</a>
         <a [routerLink]="['About']">About</a>
         <a [routerLink]="['Games']">Games</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS
    ]
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '',
    name: 'Games',
    component: GameComponent
  },
  {
    path: '/games/:id',
    name: 'GameDetails',
    component: GameDetailComponent
  }
])

export class AppComponent implements OnInit {

  Alex = "Alex";

  sayHi() {
    console.log(`sup ${ this.Alex }`)
  }

  ngOnInit() {
    console.log(`initiated app`)
  }

}
