import { Routes } from '@angular/router';
import { Register1Component } from './register1/register1.component';
import { HerocomponentComponent } from './herocomponent/herocomponent.component';

export const routes : Routes=[ 
     { path :' ' , component:HerocomponentComponent },
     { path :'register1',component:Register1Component},
     { path:'Herocomponent',component:HerocomponentComponent},
     { path: '**',component:HerocomponentComponent}
]
        