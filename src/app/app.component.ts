import { Component } from '@angular/core';

type Item = {  quantity: any; name: string; price: number};

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  title = 'FoodCart';
  items: Item[] = [];

  newItemName = '';
  newItemPrice = 0;
  quantity=0;
  totalprice=0 ;
  // newItemQuantity = 0;
  public grandtotal:number=0;
  public totalQuantity: number = 0;

  addItem() 
  {
    if (this.newItemName && this.newItemPrice) {
      this.items = [...this.items, { name: this.newItemName, price: this.newItemPrice, quantity: this.quantity }];
      this.newItemName = '';
      this.newItemPrice=0;
      this.quantity = 0;
      let totalTillNow=0
      for(let item of this.items)
      {
        const sum = item.price*item.quantity
        totalTillNow=totalTillNow+ sum ;
      }
      this.grandtotal = totalTillNow
      // this.newItemPrice = 0;
      //  const sum= this.newItemPrice * this.quantity; 
      // this.totalprice=this.totalprice+sum;
      // this.grandtotal=this.items.reduce((total, item) => total + item.price*this.quantity, 0);
    }
  }

  deleteItem(item: Item) 
  {
    this.items = this.items.filter(i => i !== item);
    let totalTillNow=0
    for(let item of this.items)
    {
      const sum = item.price*item.quantity
      totalTillNow=totalTillNow+ sum ;
    }
    this.grandtotal = totalTillNow
    
  }
  increment()
  {
    this.quantity++;
  }

  decrement()
  {
    this.quantity--;
  }
}
//   get grandTotal() {
//     return this.items.reduce((total, item) => total + item.price*this.quantity, 0);
//   }
// 
