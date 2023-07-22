import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-product-box',
 templateUrl:'./product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output()addToCart = new EventEmitter();

  product: Producto | undefined = {
    id: 1,
    title: 'Paracetamol',
    price: 20,
    category: 'Pastillas',
    description: 'El favorito de los medicos',
    image: 'https://via.placeholder.com/150'
  } ;

  
  onAddToCart():void{
    this.addToCart.emit(this.product);
    console.log(this.product);
  }

}


