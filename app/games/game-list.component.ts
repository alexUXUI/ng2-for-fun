import { Component, OnInit } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { GamesService } from './games.service';
import { Game } from './game.model';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
    <h2>Games</h2>

    <ul>
      <li *ngFor="let game of games">
        <a [routerLink]="['GameDetails', {id: game.id} ]">{{game.name}}</a>
      </li>
    </ul>

  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [GamesService, ROUTER_PROVIDERS]
})

export class GameComponent implements OnInit {

  games: Game[];

  constructor(private gamesService: GamesService) {

  }

  ngOnInit() {
    this.games = this.gamesService.getGames();
  }

}
