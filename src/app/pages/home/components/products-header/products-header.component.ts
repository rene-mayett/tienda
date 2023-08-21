import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  
  @Output() columnsCountChange = new EventEmitter<number>();
  
  @Output() sortChange = new EventEmitter<string>();
  @Output() itemCountChange = new EventEmitter<number>();

  orden:string = "desc"; // 0 = DESC  1 = ASC
  itemsShowCount: number = 12;

  onSortUpdated(newOrden: string):void {
    this.orden = newOrden;
    this.sortChange.emit(newOrden);
  }

  onItemsUpdated(count: number):void{
    this.itemsShowCount = count;
    this.itemCountChange.emit(count);
  }

  onColumnsUpdated(colsNum:number):void{
    this.columnsCountChange.emit(colsNum);
  }

}
