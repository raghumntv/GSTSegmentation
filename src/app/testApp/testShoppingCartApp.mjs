
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import Shopkeeper from '../app/shopKeeper.js'
import Earphones from '../app/earphones.js'
import Television from '../app/television.js';
import { assert ,expect } from "chai"
const chai = require("chai");
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)



describe('Shopping cart app',()=>{
        var products,earphones,television;

        it('verify all products',()=>{
        //Arrange
                products = new Shopkeeper();
                television = new Television("TV001", "Sony", "Grey", 42000);
                earphones = new Earphones("ear101", "Boat", "Blue", 560.0);
        //Act
                products.addProduct(earphones);
                products.addProduct(television);
        //Assert
                let product = products.getAllProduct();
                const getAssertedProduct=()=>{
                  for(let getProduct in products.getAllProduct()){
                                if (((JSON.stringify(product[getProduct])===JSON.stringify(television)) || (JSON.stringify(product[getProduct])===JSON.stringify(earphones))))
                                        return true;
                                     else 
                                        return false;                          
                        }                     
                }
                expect(getAssertedProduct()).to.be.true

        })

        it('verify number of products applicable for GST',()=>{
        //Arrange
                products = new Shopkeeper();
                television = new Television("TV001", "Sony", "Grey", 42000);
                earphones = new Earphones("ear101", "Boat", "Blue", 560);
        //Act
                products.addProduct(television);
                products.addProduct(earphones);
        //Assert
                expect(products.getGSTProduct()).to.have.lengthOf(1) //CheckingNumberOfGSTProducts
                expect(products.getGSTProduct()).to.containSubset([{productID:television.productID,brand:television.brand}]);//CheckingtheProductIDforGSTProducts
        })

        it('calculate total amount along with GST',()=>{
        //Arrange
                products = new Shopkeeper();
                television = new Television("TV001", "Sony", "Grey", 42000);
                earphones = new Earphones("ear101", "Boat", "Blue", 560);
        //Act
                products.addProduct(television);
                products.addProduct(earphones);

        //Assert
                assert.equal(products.getTotalPrice(television),49560); //ProductWithGST
                assert.equal(products.getTotalPrice(earphones), 560); //ProductWithoutGST
        })  

        
})
