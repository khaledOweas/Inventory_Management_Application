import { ApplicationConfig } from "@angular/core";
// import { routes } from "./app.routes";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { provideRouter } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppConfigService } from "./core/services/app-config.service";
import { routes } from "./app.routes";
import { provideTranslateService } from "@ngx-translate/core";
import { LoaderInterceptorService } from "./core/Interceptors/loader-interceptor.service";
import { HeaderInterceptorService } from "./core/Interceptors/header-interceptor.service";
import { API_BASE_URL as Identity } from "./services/IdentityService";
import { API_BASE_URL as Core } from "./services/CoreService";

function loadConfigFactory(configService: AppConfigService) {
  return () => configService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideClientHydration(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true
    },
    {
      provide: Identity,
      deps: [AppConfigService],
      useFactory: (configService: AppConfigService) => configService.getConfig().apiUrl
    },

    {
      provide: Core,
      deps: [AppConfigService],
      useFactory: (configService: AppConfigService) => configService.getConfig().apiUrl
    },
    provideTranslateService({
      defaultLanguage: "en"
    }),
    provideAnimations()
  ]
};
