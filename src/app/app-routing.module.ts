import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { AddressesComponent } from './components/settings/addresses/addresses.component';
import { CriticsComponent } from './components/settings/critics/critics.component';
import { EditProfileComponent } from './components/settings/edit-profile/edit-profile.component';
import { PaymentsComponent } from './components/settings/payments/payments.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"login"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:"cart",
    component:CartComponent,
       
  },
  
  {
    path:"orders",
    component:OrderComponent,
       
  },
  {
    path:"settings",
    component:SettingsComponent,
    children: [
      {
        path: '',
        pathMatch:"full",
        component: EditProfileComponent,
      },
      {
        path: 'edit',
        component: EditProfileComponent,
      },
      {
        path: 'orders',
        component: OrderComponent,
      },
      {
        path: 'addresses',
        component: AddressesComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'critics',
        component: CriticsComponent,
      },
      {
        path: '**',
        component: InvalidPageComponent,
      },
    ],
       
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
