import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideZoneChangeDetection } from '@angular/core';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, { providers: [ provideZoneChangeDetection(), ...(config.providers || []) ] }, context);

export default bootstrap;
