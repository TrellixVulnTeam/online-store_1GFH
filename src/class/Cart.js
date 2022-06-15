import { CartItem } from "./CartItem";

export class Cart {
    constructor(items) {
        if (Array.isArray(items)) {
            const valid = items.reduce((valid, item) => valid && (item instanceof CartItem), true);
            if (!valid) throw 'items deve ser array de CartItem';
        }
        this.items = items || [];
        this.total = 0;
        this.recalculateTotal();
    }

    recalculateTotal = () => {
        this.total = this.items.reduce((acc, item) => acc + item.subtotal, 0);
    }
}