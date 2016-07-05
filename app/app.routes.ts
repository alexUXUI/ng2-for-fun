import { GameComponent } from './games/game-list.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes = [

  { path: 'home'     , component: HomeComponent              , name: "Home"        },
  { path: 'profile'  , component: ProfileComponent           , name: "Profile"     },
  { path: 'about'    , component: AboutComponent             , name: "About"       },

  { path: 'game'     , component: GameComponent              , name: "Game"        },
  { path: 'game-details/:id', component: GameDetailsComponent, name: "GameDetails", redirectTo: "" }

]
