import { DataTypes, Sequelize } from 'sequelize';

export const OrderProductModel = {
    orderProductId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    orderId: {
        type: DataTypes.UUID,
        references: { model: 'Order', key: 'orderId' }
    },

    productId: {
        type: DataTypes.UUID,
        references: { model: 'Product', key: 'productId' }
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}