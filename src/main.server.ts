import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideZoneChangeDetection } from '@angular/core';

const bootstrap = () => bootstrapApplication(AppComponent, { providers: [ provideZoneChangeDetection(), ...(config.providers || []) ] });

export default bootstrap;
