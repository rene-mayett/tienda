import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  
  @Output()columnsCountChange = new EventEmitter<number>();
  orden:string = "...";
  itemsShowCount: number = 0;

  onSortUpdated(newOrden: string):void {
    this.orden = newOrden;
  }

  onItemsUpdated(count: number):void{
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum:number):void{
    this.columnsCountChange.emit(colsNum);
  }

}
