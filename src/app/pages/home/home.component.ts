import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';

const ROWS_HEIGHT: {[id:number]: number} = {1:400, 3:335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy{
  cols:number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  categoria:string = '';
  productosAPI: Array<Product> | undefined;
  sort: string='desc';
  count: string = '12';
  productsSubscription: Subscription | undefined;

  constructor (private cartService: CartService, private storeService:StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productsSubscription = this.storeService.getAllProducts(this.count,this.sort,this.categoria)
    .subscribe((_productos)=> {
      this.productosAPI = _productos;
    });
    
  }

  onSortChange(sort:string):void{
    this.sort= sort;
    this.getProducts();
  }

  onItemsUpdate(noitems:number):void{
    this.count = noitems.toString();
    this.getProducts();
  }

  onColumnsCountChange(colsNum:number):void{
    this.cols=colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
    console.log(this.rowHeight);
  }

  onShowCategory(newCategoria:string):void{
    this.categoria = newCategoria;
    this.getProducts();
  }

  onAddToCart(producto:Product):void{
    this.cartService.addToCart({
    producto: producto.image,
    nombre: producto.title,
    precio: producto.price,
    cantidad: 1,
    id: producto.id
    });
  }

  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe();
    }
  }

}
