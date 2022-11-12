import {IProduct} from "../shared/interfaces";
import Parse from "parse";
import {useState} from "react";

export const useProduct = () => {
   const [products, setProducts] = useState<IProduct[]>([]);

   const readProducts = async function() {
      try {
         const query = new Parse.Query('Product');
         const backendProducts = await query.find();
         const mappedProducts = backendProducts.map((backendProduct) => {
            return {
               id: backendProduct.id,
               name: backendProduct.get('name'),
               quantity: backendProduct.get('quantity'),
               veryLowStockThreshold: backendProduct.get('veryLowStockThreshold'),
               lowStockThreshold: backendProduct.get('lowStockThreshold'),
            }
         });

         setProducts(mappedProducts);
      } catch (e) {
         console.error(e);
      }
   }

   const updateProducts = async (product: IProduct, newQuantity: number) => {
      let Product = new Parse.Object('Product');
      Product.set('objectId', product.id);
      Product.set('quantity', newQuantity);

      await Product.save();
      await readProducts();
   }

   return { products, readProducts, updateProducts }
}