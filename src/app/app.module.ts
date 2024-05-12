import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpTokenInterceptor } from './modules/app-common/services/interceptors/http-token.interceptor';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppInitializerService } from './modules/app-common/services/app-init/app-initilizer.service';


export function createCustomTranslationLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initializeApp(appInitializer: AppInitializerService) {
  return () => appInitializer.initializeApp();
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { //loading translation ressources
        provide: TranslateLoader,
        useFactory: createCustomTranslationLoader,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,
    {
      provide: HTTP_INTERCEPTORS, // Provide the HTTP_INTERCEPTORS token
      useClass: HttpTokenInterceptor, // Use the HttpTokenInterceptor class that we create
      multi:true // Allow multiple interceptors with the default angular interceptors
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [AppInitializerService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
