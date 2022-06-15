import { DataTypes, Sequelize } from 'sequelize';

export const OrderModel = {

    orderId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}