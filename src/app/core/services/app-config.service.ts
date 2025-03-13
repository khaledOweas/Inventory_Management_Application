import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { AppConfig } from "../models/appConfig";


@Injectable({
  providedIn: "root"
})
export class AppConfigService {
  private config!: AppConfig;

  constructor(private http: HttpClient) {}

  // Load config.json and map to AppConfig
  async loadConfig(): Promise<void> {
    this.config = await firstValueFrom(this.http.get<AppConfig>("/assets/config/config.json"));
  }

  // Provide access to the config
  getConfig(): AppConfig {
    if (!this.config) {
      throw new Error("Config has not been loaded!");
    }
    return this.config;
  }
}
