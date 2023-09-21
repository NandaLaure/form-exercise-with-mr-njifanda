import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const islogin: boolean = false;
  if (!islogin) {
    router.navigate(['dashboard'],{
      queryParams: {message:'Please login to access this page'}
    });
    
    return false
  }
  return true;
};
