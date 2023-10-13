
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  // console.log('token', token);
  // console.log(state);
  
  
  
  if(token){
    
    if(state.url === '/login'){
      return false;
    } else {
      return true;
    }    
  } else {
    if(state.url === '/login'){
      return true;
    } else {
      router.navigate(['login']);
      return false;
    }
  }
  
};
