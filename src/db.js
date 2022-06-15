import { DataTypes, Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, './data/database.sqlite'),
    logging: false,
    define: { freezeTableName: true }
});
