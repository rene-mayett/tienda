import { Component, EventEmitter, Input, Output } from '@angular/core';
import { stockElement } from 'src/app/models/stock.model';

@Component({
  selector: 'app-product-box',
 templateUrl:'./product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output()addToCart = new EventEmitter();

  product: stockElement | undefined = {
    id: 1,
    title: 'Colageno Hidrolizado',
    price: 900,
    category: 'Berry Gen',
    description: 'Frasco en polvo 205gr',
    image: '../../../../assets/polvo_hidrolizado.png'
  };
  
  onAddToCart():void{
    this.addToCart.emit(this.product);
    console.log(this.product);
  }

}


