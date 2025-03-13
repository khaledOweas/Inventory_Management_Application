import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { locale as enLang } from "./modules/i18n/vocabs/en";
import { locale as esLang } from "./modules/i18n/vocabs/es";
import { locale as deLang } from "./modules/i18n/vocabs/de";
import { ThemeModeService } from "./_metronic/partials/layout/theme-mode-switcher/theme-mode.service";
import { RouterModule, RouterOutlet } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { CustomToasterService } from "./core/services/custom-toaster.service";
import { MessageService } from "primeng/api";
import { Subject, takeUntil } from "rxjs";
import { ColumnManager } from "./data/DataTableColumnData";
import { TranslationService } from "./core/services/translation.service";
@Component({
  selector: "body[root]",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, RouterOutlet, ToastModule],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  destroyed$ = new Subject<void>();
  constructor(
    private translationService: TranslationService,
    private modeService: ThemeModeService,
    private cts: CustomToasterService,
    private messageService: MessageService
  ) {
    // register translations
    this.translationService.loadTranslations(enLang, esLang, deLang);
    ColumnManager.setTranslationService(translationService);
  }

  ngOnInit() {
    this.modeService.init();
    this.subscribeToToasters();
  }
  subscribeToToasters() {
    this.cts.toasterListener$.pipe(takeUntil(this.destroyed$)).subscribe((msg: any) => {
      if (msg.title) {
        setTimeout(() => {
          this.addMessage(msg.style, msg.title, msg.message);
        }, 0);
      }
    });
  }

  addMessage(style: string, tit: string, msg: string) {
    this.messageService.add({ key: "tl", severity: style, summary: tit, detail: msg });
  }
}
