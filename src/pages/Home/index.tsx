import React, {useEffect} from "react";
import {HomeTemplate} from "../../components/templates";
import {useProduct} from "../../hooks/useProduct";


export const Home = () => {
   const { products, readProducts, updateProducts } = useProduct();

   useEffect(() => {
      readProducts();
   }, []);

   if (products.length === 0) return null;
   return <HomeTemplate backendProducts={products} updateProducts={updateProducts} />
};
