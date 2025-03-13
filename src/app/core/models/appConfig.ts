export interface AppConfig {
  apiUrl: string;
  authEndpoint: string;
  featureFlags: {
    enableNewFeature: boolean;
  };
}
