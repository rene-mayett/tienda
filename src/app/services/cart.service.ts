import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItems, shopCart } from '../models/carrito.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<shopCart>({items: []});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItems):void{
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item)=> _item.id === item.id);

    if(itemInCart){
      itemInCart.cantidad +=1;
    }
    else{
      items.push(item);
    }

    this.cart.next({items});
    this._snackBar.open('1 item added to cart.','Ok',{duration: 3000});
    console.log(this.cart.value);
  }


  getTotal(items: Array<CartItems>):number {
    return items.map((item) => item.precio * item.cantidad).reduce((prev,current)=> prev + current,0);
  }

  clearCart():void{
    this.cart.next({items:[]});
    this._snackBar.open('Eliminados','OK',{duration: 3000});
  }
}
