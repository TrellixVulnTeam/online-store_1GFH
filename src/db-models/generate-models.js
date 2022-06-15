import { Sequelize } from 'sequelize';
import { OrderProductModel } from "./OrderProductModel.js";
import { OrderModel } from "./OrderModel.js";
import { ProductModel } from "./ProductModel.js"

export const generateModels = async (sequelize) => {

    if (!sequelize || !(sequelize instanceof Sequelize)) throw 'primeiro parâmetro (sequelize) é obrigatório e do tipo Sequelize';

    sequelize.define("Product", ProductModel);
    sequelize.define("Order", OrderModel);
    sequelize.define('OrderProduct', OrderProductModel);
    return await sequelize.sync();
}