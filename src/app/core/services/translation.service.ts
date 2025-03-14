import { Injectable } from "@angular/core";
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";

export interface Locale {
  lang: string;
  data: any;
}

const LOCALIZATION_LOCAL_STORAGE_KEY = "language";

@Injectable({
  providedIn: "root"
})
export class TranslationService {
  // Private properties
  private langIds: any = [];

  constructor(private translate: TranslateService) {
    // add new langIds to the list
    this.translate.addLangs(["en"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang("en");
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
    this.translate.use(this.getSelectedLanguage());
  }

  setLanguage(lang: string) {
    if (lang) {
      this.translate.use(this.translate.getDefaultLang());
      this.translate.use(lang);
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
    } else {
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, "en");
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): any {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || this.translate.getDefaultLang();
    }
  }
  get(path: string): string {
    return this.translate.instant(path);
  }
}
