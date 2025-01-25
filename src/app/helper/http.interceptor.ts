import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { StorageService } from "../services/storage/storage.service";
import { AuthUserService } from "../services/auth/auth-user.service";

@Injectable()
export class HttpReqeustInterceptor implements HttpInterceptor {

  private isRefreshing: boolean = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthUserService,
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
          switchMap(() => {
            this.isRefreshing = false;

            return next.handle(request);

          }),
          catchError((error) => {
            this.isRefreshing = false;
            if (error.status == '403') {
              // TODO implement logout!
              // Think about eventbusService
              // this.eventBusService.emit(new EventData('logout', null))
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