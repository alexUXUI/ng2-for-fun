export class GamesService {

  games = [
    { name: 'Fifa', id: 1, rating: 5 },
    { name: 'Halo', id: 2, rating: 5 },
    { name: 'Palgue', id: 3, rating: 5 }
  ];

  getGames() {
    return this.games;
  }

  getGame(id) {
    return this.games.find(games => games.id == id);
  }
}
