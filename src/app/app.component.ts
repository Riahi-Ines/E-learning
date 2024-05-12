import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppInitializerService } from './modules/app-common/services/app-init/app-initilizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-learning';

  constructor(private translate: TranslateService,private appInitializerService:AppInitializerService){
    //this.translate.setDefaultLang('ar');
  }
  ngOnInit(): void {
    this.appInitializerService.initializeApp().then(() => {
      const defaultLang = this.translate.getDefaultLang();
      if (defaultLang === 'ar') {
          this.translate.setDefaultLang('ar');
          document.dir = 'rtl'; // RTL direction change right to left
      } else {
          document.dir = 'ltr';// left to right
      }
    });
}
 

   

}
