import Products from "./products.js";

class Television extends Products {
    constructor(productID, brand, colour, price) {
        super(productID, brand, colour, price);
    }
}
export default Television;