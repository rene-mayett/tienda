export interface CartItems {
    producto: string,
    nombre: string,
    precio: number,
    cantidad: number,
    id: number
}

export interface shopCart {
    items: Array<CartItems>;
}