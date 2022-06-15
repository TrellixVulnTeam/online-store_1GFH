import { Product } from "./Product.js";
import { Sequelize } from 'sequelize';

export class ProductRepository {
    constructor(sequelize) {
        if (!sequelize || !(sequelize instanceof Sequelize)) throw 'primeiro parâmetro (sequelize) é obrigatório e do tipo Sequelize';
        this.db = sequelize;
    }

    async getProducts() {
        const products = await this.db.models.Product.findAll({});
        return products.map((p) => {
            return new Product(p.productID, p.name, p.image, p.price, p.description)
        }
        )

    }

    async getProductBySKU(id) {
        const p = await this.db.models.Product.findByPk(id);
        if (!p) return null;
        return new Product(p.productID, p.name, p.image, p.price, p.description)
    }
}