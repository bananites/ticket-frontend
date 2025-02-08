import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { StorageService } from "../services/storage/storage.service";
import { AuthUserService } from "../services/auth/auth-user.service";
import { EventBusService } from "../shared/event-bus/event-bus.service";
import { EventData } from "../shared/event-bus/event.class";

@Injectable()
export class HttpReqeustInterceptor implements HttpInterceptor {

  private isRefreshing: boolean = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthUserService,
    private eventBusService: EventBusService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.clone({
      withCredentials: true,
    });


    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {

          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    )
  }


  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedOn()) {
        return this.authService.refreshToken().pipe(
          switchMap((value) => {

            this.isRefreshing = false;

            this.storageService.saveSession(value);
            const newToken = this.storageService.getSession()?.accessToken


            // Update Reqeust and use new Token 
            const updatedRequest = request.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`
              }
            })

            return next.handle(updatedRequest);
          }),
          catchError((error) => {


            this.isRefreshing = false;
            if (error.status == '403') {
              // TODO implement logout!
              // Think about eventbusService

              console.log("event bus called")
              this.eventBusService.emit(new EventData('logout', null))
            }

            return throwError(() => error);
          })
        )
      }
    }

    return next.handle(request);
  }
}


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpReqeustInterceptor, multi: true },
]