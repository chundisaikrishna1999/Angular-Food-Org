import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public finalCost = 0;
  public totalItems = 0;
  public orders:any;

  constructor(private restaurantService:RestaurantService,private orderService: OrderService,
    private router: Router) { }

  

  ngOnInit(): void {
    this.orders=this.restaurantService.getRestaurants();
    this.orders=this.orders.filter((order)=>{
      return order.quantity>0;
    })
    this.orders.forEach((order: any) => {
      if (order.quantity > 0) {
        this.totalItems += order.quantity;
        this.finalCost += order.cost * order.quantity;
      }
    });
  }
  proceedToOrders() {
    
    // orderId: orderId,orderDate: orderDate,orderTotal: orderTotal,orderStatus: orderStatus,orderItems: orderItems,
    const orderId = Math.floor(Math.random() * 1000000);
    const orderDate = new Date();
    const orderTotal = this.finalCost;
    const orderStatus = 'pending';
    const orderItems = this.orders;
    

    this.orderService.addOrder(
      orderId,
      orderDate,
      orderTotal,
      orderStatus,
      orderItems
    );
    console.log(this.orderService.getOrders());
    this.restaurantService.clearCart();
    this.router.navigate(['/orders']);
  }

}
