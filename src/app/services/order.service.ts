import { Injectable } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public orders: any[] = [];
  constructor() {}

  // add am order to the orders array having the following structure orderId : number, orderDate : Date, orderTotal : number, orderStatus : string, orderItems : any[]

  addOrder(
    orderId: number,
    orderDate: Date,
    orderTotal: number,
    orderStatus: string,
    orderItems: any[]
  ) {
    this.orders.push({
      orderId: orderId,
      orderDate: orderDate,
      orderTotal: orderTotal,
      orderStatus: orderStatus,
      orderItems: orderItems,
    });
    
    
  }

  // get all the orders from the orders array
  public getOrders() {
    return this.orders;
  }
}
