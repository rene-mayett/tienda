import { Component, Input } from '@angular/core';
import { CartItems, shopCart } from 'src/app/models/carrito.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  private _carrito: shopCart = { items:[] };
  cantidadItems = 0;

  @Input() get cart(): shopCart {
    return this._carrito;
  }
  constructor(private cartService:CartService){}
  set cart(cart: shopCart){
    this._carrito = cart;
    this.cantidadItems = cart.items.map((item)=> item.cantidad).reduce((prev,current)=> prev + current , 0);
  }

  getTotal(items: Array<CartItems>):number {
    return this.cartService.getTotal(items);
    //return items.map((item) => item.precio * item.cantidad).reduce((prev,current)=> prev + current,0);
  }

  onClearCart():void{
    this.cartService.clearCart;
  }
}
