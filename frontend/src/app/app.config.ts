import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { MyPreset } from '../mytheme';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './token.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset
        }
    }),
    provideHttpClient(withInterceptors([tokenInterceptor]))

  ]
};
