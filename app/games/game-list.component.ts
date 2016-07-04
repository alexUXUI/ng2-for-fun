import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GamesService } from './games.service';
import { Contact } from './contact.model';

@Component({
  selector: 'my-app',
  template: `
    <h2>Games</h2>

    <ul>
      <li *ngFor="let game of games">
        <a>{{game.name}}</a>
      </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [GamesService]
})

export class GameComponent implements OnInit {

  games: Game[];

  constructor(private gamesService: GamesService) {

  }

  ngOnInit() {
    this.games = this.gamesService.getGames();
  }

}
