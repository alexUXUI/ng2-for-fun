import { ContactsListComponent } from './contacts/contacts-list.component';
import { ContactsDetailComponent } from './contacts/contacts-detail.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes = [

  { path: 'home'       , component: HomeComponent           },
  { path: 'profile'    , component: ProfileComponent        },
  { path: 'about'      , component: AboutComponent          },

  { path: ''           , component: ContactsListComponent   },
  { path: 'contact/:id', component: ContactsDetailComponent }

]
