import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app.routes';

bootstrap(AppComponent, [provideRouter(AppRoutes)]);
