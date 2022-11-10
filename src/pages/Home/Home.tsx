import React, {useEffect, useState} from "react";
import {IProduct} from "../../shared/interfaces";
import {HomeTemplate} from "../../components/templates";
import Parse from 'parse';


const Home = () => {
   const [products, setProducts] = useState<IProduct[]>([]);

   const readProducts = async function(): Promise<IProduct[]> {
      try {
         const query = new Parse.Query('Product');
         const backendProducts = await query.find();
         return backendProducts.map((backendProduct) => {
            return {
               id: backendProduct.id,
               name: backendProduct.get('name'),
               quantity: backendProduct.get('quantity'),
               veryLowStockThreshold: backendProduct.get('veryLowStockThreshold'),
               lowStockThreshold: backendProduct.get('lowStockThreshold'),
            }
         });
      } catch (e) {
         console.error(e)
         return [];
      }
   }

   useEffect(() => {
      readProducts().then((parsedProducts) => {
         setProducts(parsedProducts);
      });
   }, []);

   const updateQuantity = async (product: IProduct, newQuantity: number) => {
      let Product = new Parse.Object('Product');
      Product.set('objectId', product.id);
      Product.set('quantity', newQuantity);

      await Product.save();
      const parsedProducts = await readProducts();
      setProducts(parsedProducts);
   }

   if (products.length === 0) return null;
   return <HomeTemplate backendProducts={products} updateQuantity={updateQuantity} />
}

export default Home;
