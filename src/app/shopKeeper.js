import Products from "./products.js";
const product=new Products();

export default class Shopkeeper {
    
    constructor() {
       this.allProduct = new Array();
    }

    addProduct(product) {
        this.allProduct.push(product);

    }

    getAllProduct() {
        return this.allProduct;
    }

    getGSTProduct() {
        let gstProductWithGST = new Array();
        this.getAllProduct().forEach(gstProduct => {
            if (product.isGSTapplicable(gstProduct)) {
                gstProductWithGST.push(gstProduct);
            }
        })
        return gstProductWithGST;
    }

    getTotalPrice(productItem) {
        if (product.isGSTapplicable(productItem)) {
            return productItem.price + product.getGstCharge(productItem.price);
        } else {
            return productItem.price;
        }
    }
}
