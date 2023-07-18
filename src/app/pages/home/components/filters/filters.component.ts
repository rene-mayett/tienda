import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html'
})

export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string> ();
  categories = ['Antibioticos','Naturista'];

  onShowCategory(category:string):void{
    console.log("Filter Component: ",category);
    this.showCategory.emit(category);
  }

}
