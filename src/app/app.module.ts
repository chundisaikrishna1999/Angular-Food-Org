import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RestaurantFilterPipe } from './custompipes/restaurantfilter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddressesComponent } from './components/settings/addresses/addresses.component';
import { EditProfileComponent } from './components/settings/edit-profile/edit-profile.component';
import { PaymentsComponent } from './components/settings/payments/payments.component';
import { InvalidPageComponent } from './components/invalid-page/invalid-page.component';
import { CriticsComponent } from './components/settings/critics/critics.component';
import { CriticFilterPipe } from './components/settings/critics/critic-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    RestaurantFilterPipe,
    CartComponent,
    OrderComponent,
    SettingsComponent,
    CriticsComponent,
    AddressesComponent,
    EditProfileComponent,
    PaymentsComponent,
    InvalidPageComponent,
    CriticFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
