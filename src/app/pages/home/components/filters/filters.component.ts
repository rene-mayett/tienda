import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl:'./filters.component.html'
})

export class FiltersComponent implements OnInit,OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categories: Array<string> | undefined ;
  categoriesSubscription: Subscription | undefined;
  cat:string='';

  constructor (private storeService: StoreService) {}

  ngOnInit(){
     this.categoriesSubscription= this.storeService.getAllCategories().subscribe((response)=>{
      this.categories = response;
    });
  }

  onShowCategory(newcat:string):void{
    console.log("Click:",newcat)
    this.cat = newcat;
    this.showCategory.emit(newcat);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }
}
