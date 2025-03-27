import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'About',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'Skills',
        loadComponent: () => import('./skillsability/skillsability.component').then(m => m.SkillsabilityComponent)
    },
    {
        path: 'Education',
        loadComponent: () => import('./education/education.component').then(m => m.EducationComponent)
    },
    {
        path: 'Experience',
        loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'Contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'Expertise',
        loadComponent: () => import('./workexperties/workexperties.component').then(m => m.WorkexpertiesComponent)
    },
    {
        path: '**',
        redirectTo: '/Home'
    }
];
