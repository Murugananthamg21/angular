import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LayoutToggleService } from './core/services/layout-toggle.service';
import { provideHttpClient } from '@angular/common/http';

export function initializeApp(appConfigService: LayoutToggleService) {
  return () => appConfigService.checkScreenSize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(), 
    provideAnimationsAsync(), 
    provideAnimations(),
    importProvidersFrom(MatIconModule),
  ]
};
