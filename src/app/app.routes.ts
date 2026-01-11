import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { ProductDetail } from './pages/productdetails/productdetails';

export const routes: Routes = [
     {
        path:'',
        component:Home
    },
    {
        path:'Contact',
        component:Contact
    },
    {
        path: 'product/:id',
        component: ProductDetail
    }
    
];
