import { Component } from '@angular/core';
const ROWS_HEIGHT: {[id:number]: number} = {1:400, 3:335, 4:350}
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
})
export class HomeComponent {
  cols:number = 0;
  rowHeight = ROWS_HEIGHT[this.cols];
  categoria:string = '';

  onColumnsCountChange(colsNum:number):void{
    console.log(colsNum);
    this.cols=colsNum;
  }

  onShowCategory(newCategoria:string):void{
    this.categoria = newCategoria;
  }

}
