import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public restaurants: any = [
    {
      id: 1,
      restaurant: 'reddys biriyani zone',
      dishName: 'roasted chicken biriyani',
      description: 'Indian Restaurant',
      rating: 4,
      cost: 190,

      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 2,
      restaurant: 'kabablo',
      dishName: 'Cajun spiced chicken',
      description: 'Indian Restaurant',
      rating: 4.1,
      cost: 230,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 3,
      restaurant: 'main land china',
      dishName: 'Veg Momos',
      description: 'Chineese Restaurant',
      rating: 3.9,
      cost: 250,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 4,
      restaurant: 'beijing bites',
      dishName: 'cripy fried chicken momos',
      description: 'Chineese Restaurant',
      rating: 4.2,
      cost: 180,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 5,
      restaurant: "mcdonald's",
      dishName: 'American cheese burger',
      description: 'American Restaurant',
      rating: 3.9,
      cost: 260,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 6,
      restaurant: 'KFC',
      dishName: 'KFC chicken bucket',
      description: 'American Restaurant',
      rating: 4.1,
      cost: 599,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 7,
      restaurant: 'home kitchen services',
      dishName: 'mix non veg noodles',
      description: 'Chineese Restaurant',
      rating: 3.9,
      cost: 100,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 8,
      restaurant: 'hotel shalimar',
      dishName: 'chicken fried rice',
      description: 'chineese Restaurant',
      rating: 4.4,
      cost: 190,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 9,
      restaurant: 'al arabia',
      dishName: 'Chicken shawarma',
      description: 'Lebaneese style Restaurant',
      rating: 4.2,
      cost: 120,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 10,
      restaurant: 'al bek',
      dishName: 'Alfaham Chicken',
      description: 'Lebaneese style Restaurant',
      rating: 4.1,
      cost: 230,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 8,
      restaurant: 'hotel shalimar',
      dishName: 'chicken fried rice',
      description: 'chineese Restaurant',
      rating: 4.4,
      cost: 190,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 9,
      restaurant: 'al arabia',
      dishName: 'Chicken shawarma',
      description: 'Lebaneese style Restaurant',
      rating: 4.2,
      cost: 120,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
    {
      id: 10,
      restaurant: 'al bek',
      dishName: 'Alfaham Chicken',
      description: 'Lebaneese style Restaurant',
      rating: 4.1,
      cost: 230,
      quantity:0,
      imageUrl: 'http://dummyimage.com/128x100.png/ff4444/ffffff',
    },
  ];

  public getRestaurants(): any {
    return this.restaurants;
  }

  public getRestaurant(id: number): any {
    return this.restaurants.find((restaurant: any) => restaurant.id === id);
  }

  public addToCart(id:string){
    console.log(id)
    const index=this.restaurants.findIndex((res)=>
      res.id===id
    )
    
    this.restaurants[index].quantity=this.restaurants[index].quantity+1;
  }

  public clearCart(): any {
    this.restaurants.forEach((restaurant: any) => {
      restaurant.quantity = 0;
    });
  }


  constructor() {}
}
