import Products from "./products.js";

export default class Earphones extends Products {
    constructor(productID, brand, colour, price) {
        super(productID, brand, colour, price);
    }
}