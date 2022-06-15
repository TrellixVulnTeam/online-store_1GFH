import { Cart } from "./Cart";
const { Sequelize } = require('sequelize');;

export class OrderRepository {
    constructor(sequelize) {
        if (!sequelize || !(sequelize instanceof Sequelize)) throw 'primeiro parâmetro (sequelize) é obrigatório e do tipo Sequelize';
        this.db = sequelize;
    }

    async createOrder(cart) {
        if (!cart || !(cart instanceof Cart)) throw 'primeiro parâmetro (cart) é obrigatório e deve ser do tipo Cart';
        const order = await this.db.models.Order.create({ total: cart.total });
        const orderProducts = cart.items.map(item => ({
            orderId: order.orderId,
            productId: item.product.SKU,
            quantity: item.quantity,
            subtotal: item.subtotal
        }));

        await this.db.models.OrderProduct.bulkCreate(orderProducts);

        return order.orderId;
    }
}