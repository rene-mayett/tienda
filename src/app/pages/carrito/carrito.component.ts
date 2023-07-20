import { Component } from '@angular/core';
import { CartItems, shopCart } from 'src/app/models/carrito.model';

@Component({
  selector: 'app-carrito',
  templateUrl:'./carrito.component.html'
})
export class CarritoComponent {

  carrito: shopCart = { items :[{
    producto: 'https://via.placeholder.com/150',
    nombre: 'Aspirina',
    precio: 115,
    cantidad: 1,
    id: 10
  },
  {
    producto: 'https://via.placeholder.com/150',
    nombre: 'Aspirina',
    precio: 115,
    cantidad: 3,
    id: 2
  }
]};

  dataSource: Array<CartItems> = [];

  displayedColumns: Array<string> = [
    'producto',
    'nombre',
    'precio',
    'cantidad',
    'total',
    'accion'
  ];
  
  ngOnInit(): void {

    this.dataSource = this.carrito.items;

  }


  getTotal(items: Array<CartItems>):number {
    return items.map((item) => item.precio * item.cantidad).reduce((prev,current)=> prev + current,0);
  }

}
