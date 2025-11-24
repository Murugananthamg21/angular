import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideLoadingBar } from '@ngx-loading-bar/core';
import { provideLoadingBarRouter } from '@ngx-loading-bar/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

// bootstrapApplication(AppComponent, appConfig,)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideLoadingBar({}),
    provideLoadingBarRouter()
  ]
})
  .catch(err => console.error(err));