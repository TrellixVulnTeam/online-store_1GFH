import { Product } from "./Product";

export class CartItem{
    constructor(product, quantity){
        if (!product || !(product instanceof Product)) throw 'primeiro parâmetro (product) é obrigatório e deve do tipo Product';
        if(isNaN(quantity)) throw "segundo parâmetro (quantity) deve ser INT"

        this.product = product;
        this.quantity = quantity;
        this.subtotal = subtotal;
    }
}