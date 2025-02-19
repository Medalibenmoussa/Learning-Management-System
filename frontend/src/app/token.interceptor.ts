import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('authToken');

  const onewreq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(onewreq).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    })
  );
};
