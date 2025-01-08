import { Routes } from '@angular/router';
import { MaindashboardComponent } from './Layout/maindashboard/maindashboard.component';
import { AboutComponent } from './Layout/about/about.component';
import { ProductsComponent } from './Layout/products/products.component';
import { ContactComponent } from './Layout/contact/contact.component';
import { VegComponent } from './Layout/veg/veg.component';
import { NonvegComponent } from './Layout/nonveg/nonveg.component';
import { HomeComponent } from './Layout/home/home.component';

export const routes: Routes = [
    {path:"" , component:MaindashboardComponent,children:[
        {path:"",component:HomeComponent},
        {path:"about",component:AboutComponent},
        {path:"menu",component:ProductsComponent,children:[
            { path: "", redirectTo: "nonveg", pathMatch: "full" },
            {path:"veg" , component:VegComponent},
            {path:"nonveg" , component:NonvegComponent}
        ]},
        {path:"contact",component:ContactComponent},
    ]}
];
