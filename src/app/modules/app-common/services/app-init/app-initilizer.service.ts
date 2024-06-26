import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(
    // private userService: UserService
    private translate: TranslateService
  ) { }

  initializeApp(): Promise<void> {
    return new Promise((resolve) => {
      // todo load user preference from backend
      /*
        call rest api to get user preferences
        this.userService.getPreferences()
        .subscribe( {
          next: (prefs) => {
            if (prefs.preferredLang) {
              this.translate.setDefaultLang(prefs.preferredLang);
            } else {
              this.translate.setDefaultLang('fr');
            }
          },
          error: () => {
            this.translate.setDefaultLang('fr');
          }
        });
      */
        const browserLang = this.translate.getBrowserLang();
        const defaultLang = browserLang && browserLang.match(/en|ar|fr/) ? browserLang : 'en';
        this.translate.setDefaultLang(defaultLang);
      // more init logic
      resolve();
    });
  }
}