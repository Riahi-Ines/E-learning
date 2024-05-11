import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor( private tokenService:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.token;// Get the authentication token from the token service
    if (token) {
      const authReq = request.clone({ //clone :create copie Clone the request to avoid mutation

        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token // Add the token to the Authorization header
        })
      });
      return next.handle(authReq);// Proceed with the modified request
    }
    return next.handle(request);// If no token, proceed with the original request
  }
}
