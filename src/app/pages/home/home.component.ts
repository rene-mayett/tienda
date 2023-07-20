import { Component } from '@angular/core';

const ROWS_HEIGHT: {[id:number]: number} = {1:400, 3:335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
})
export class HomeComponent {
  cols:number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  categoria:string = '';

  onColumnsCountChange(colsNum:number):void{
    this.cols=colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
    console.log(this.rowHeight);
  }

  onShowCategory(newCategoria:string):void{
    this.categoria = newCategoria;
  }

}
