import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';


const config ={
  disableAnimations: false,
}

export const appConfig: ApplicationConfig = {
  providers: [{provide: BrowserAnimationsModule, useValue: BrowserAnimationsModule.withConfig(config)}, provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideHttpClient(withFetch()) ]
};
