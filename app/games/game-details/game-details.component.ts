import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'game-detail',
  template: `
    <h2>{{game.name}}</h2>
  `
})
export class GameDetailComponent implements OnInit {

  constructor(private gamesService: GamesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.game = this.gamesService.getGames(this.route.snapshot.params.id);
  }
}
