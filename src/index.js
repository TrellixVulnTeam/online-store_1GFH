import express from "express";
import { Sequelize } from "sequelize";
import { generateModels } from "./db-models/generate-models.js";
import { ProductRepository } from "./class/ProductRepository.js";
import { sequelize } from './db.js';

await generateModels(sequelize);

const productRepository = new ProductRepository(sequelize);

const app = express();

app.use(express.static("public"))

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    res.setHeader('content-type', 'text/html; charset=utf-8');

    const canecaPokemon = await productRepository.getProductBySKU("acfbce4c-571c-4d64-8511-86ce7eb44723")
    res.render("index", canecaPokemon)
});

app.get("/produtos", async (req, res) => {
    res.setHeader('content-type', 'text/html; charset=utf-8');

    const products = await productRepository.getProducts()
    res.render("produtos", {products})
})


app.get("/carrinho", (req, res) => {
    res.end("carrinho")
})

app.listen(3000);
console.log(`ouvindo em http://localhost:3000`);