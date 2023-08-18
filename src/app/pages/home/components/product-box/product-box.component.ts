import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
 templateUrl:'./product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  @Input() producto_front: Product | undefined; 

  ngOnInit():void {
    //console.log(this.product);
  }

  onAddToCart():void{
    this.addToCart.emit(this.producto_front);
    console.log(this.producto_front);
  }

}


