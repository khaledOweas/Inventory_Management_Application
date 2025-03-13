import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { AppConfigService } from "./app/core/services/app-config.service";

bootstrapApplication(AppComponent, appConfig)
  .then(async (appRef) => {
    const configService = appRef.injector.get(AppConfigService);
    await configService.loadConfig();
    console.log("Configuration loaded successfully!");
  })
  .catch((err) => console.error(err));
