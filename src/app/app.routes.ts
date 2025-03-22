import { Route } from '@angular/router';

export const routes: Route[] = [
    { 
        path: 'Home',
        loadComponent: ()=> import('./home/home.component').then(m => m.HomeComponent)
    },
    { 
        path: 'About',
        loadComponent: ()=> import('./about/about.component').then(m => m.AboutComponent)
    },
  ];
