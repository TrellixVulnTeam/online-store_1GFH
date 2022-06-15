export class Product{
    constructor(SKU, name, image, price, description){
        console.log(SKU, name, image, price, description)

        if(!SKU) throw "primeiro parâmetro (SKU) é obrigatório";
        if(!name) throw "segundo parâmetro (name) é obrigatório";
        if(!price || isNaN(price)) "terceiro parâmetro (price) é obrigatório e deve ser FLOAT"
        if(!image) throw "quarto parâmetro (image) é obrigatório";
        if(!description) throw "quinto parâmetro (description) é obrigatório";

        this.SKU = SKU;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    
}