 class Products {
    gstPercentage = 18;
    

     constructor(productID, brand, colour, price) {
        this.productID = productID;
        this.brand = brand;
        this.price = price;
        this.colour = colour;
        this.gstCharge
    }

    getGstCharge(price) {
        return (price * this.gstPercentage) / 100;
    }

    isGSTapplicable(gstProduct) {
        if (gstProduct.price > 2000) {
            this.gstCharge = this.getGstCharge(gstProduct.price);
            return true;
        } else {
            this.gstCharge = 0;
            return false;
        }
    }

    getTotalPrice() {
        return price + this.gstCharge;
    }

}
export default Products;