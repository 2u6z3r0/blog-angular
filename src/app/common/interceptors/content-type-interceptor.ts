import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentTypeInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       let clonedRequest = req.clone({setHeaders:{
           'Content-Type' : 'application/json'
       }})
        return next.handle(clonedRequest);
    }

}