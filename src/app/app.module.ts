import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpTokenInterceptor } from './modules/app-common/services/interceptors/http-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
