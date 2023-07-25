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


  removeCantidad(item:CartItems):void{
    let itemForRemoval: CartItems | undefined;
    let filteredItems = this.cart.value.items.map((_item)=>{
      if(_item.id === item.id){
        _item.cantidad--;
      }
      if(item.cantidad === 0){
        itemForRemoval = _item;
      }
      return _item;
    });
    if(itemForRemoval){
      filteredItems = this.removeRow(itemForRemoval,false);
    }
    this.cart.next({items: filteredItems});
    this._snackBar.open('1 elemento eliminado del carrito','OK',{duration: 3000});
  }

  removeRow(item:CartItems,update:boolean = true):Array<CartItems>{
    const filteredItems = this.cart.value.items.filter((_item)=> _item.id !== item.id);
    this.cart.next({items: filteredItems});
    if(update){this._snackBar.open('1 elemento eliminado del carrito','OK',{duration: 3000});}
    return filteredItems;
  }

  
}
