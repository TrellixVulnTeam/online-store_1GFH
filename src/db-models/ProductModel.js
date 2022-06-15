import { DataTypes, Sequelize } from 'sequelize';

export const ProductModel = {

    productID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
