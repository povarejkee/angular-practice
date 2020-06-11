import { Injectable } from '@angular/core'
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { AuthService } from './auth.service'
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isAuth()) {
      req = req.clone({
        setParams: {
          auth: this.authService.token,
        },
      })
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout()
          this.router.navigate(['/admin', 'login'], {
            queryParams: {
              sessionIsOver: true,
            },
          })
        }

        return throwError(error)
      })
    )
  }
}
