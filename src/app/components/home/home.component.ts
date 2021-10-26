import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public restaurants: any;
  public searchQuery:string= "";
  public isLoggedIn:boolean=false;
 

  constructor(private restaurantService:RestaurantService) {

   }

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
    
  }

  onAddToCart(id:string){
    this.restaurantService.addToCart(id);
  }

}
