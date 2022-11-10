import React, {ChangeEvent, useEffect, useState} from "react";
import {Div} from "../../atoms";
import {IProduct} from "../../../shared/interfaces";
import {ProductTable} from "../../organisms";

interface HomeTemplateProps {
   backendProducts: IProduct[];
   reduceQuantity: Function;
   increaseQuantity: Function;
}

export const HomeTemplate = ({backendProducts, reduceQuantity, increaseQuantity}: HomeTemplateProps) => {
   const [searchTerm, setSearchTerm] = useState('');

   const [veryLowStockProducts, setVeryLowStockProducts] = useState(backendProducts.filter((product) => {
      return product.quantity <= product.veryLowStockThreshold;
   }));

   const [lowStockProducts, setLowStockProducts] = useState(backendProducts.filter((product) => {
      return product.quantity <= product.lowStockThreshold && product.quantity > product.veryLowStockThreshold;
   }));

   const [products, setProducts] = useState(backendProducts.filter((product) => {
      return product.quantity > product.lowStockThreshold;
   }));

   useEffect(() => {
      const newVeryLowStockProducts = backendProducts.filter((product) => {
         return product.quantity <= product.veryLowStockThreshold;
      });

      const newLowStockProducts = backendProducts.filter((product) => {
         return product.quantity <= product.lowStockThreshold && product.quantity > product.veryLowStockThreshold;
      });

      const newProducts = backendProducts.filter((product) => {
         return product.quantity > product.lowStockThreshold;
      });

      setVeryLowStockProducts(newVeryLowStockProducts);
      setLowStockProducts(newLowStockProducts);
      setProducts(newProducts);
   }, [backendProducts]);

   useEffect(() => {
      if (searchTerm) {
         const newProducts = backendProducts.filter((product) => {
            return product.quantity > product.lowStockThreshold && product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
         });

         if (newProducts) {
            setProducts(newProducts);
         } else {
            setProducts([]);
         }
      } else {
         const newProducts = backendProducts.filter((product) => {
            return product.quantity > product.lowStockThreshold;
         });
         setProducts([...newProducts]);
      }
   }, [searchTerm]);

   const onSearchBarChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
   }

   return (
      <Div className="container" style={{maxWidth: '1000px'}}>
         <Div className="row py-5">
            {veryLowStockProducts.length > 0 && <button type="button" className="btn btn-danger">Προϊόντα σε πολύ χαμηλό stock</button>}
            <ProductTable products={veryLowStockProducts} reduceQuantity={reduceQuantity} increaseQuantity={increaseQuantity}  name="very-low-products"/>
            {lowStockProducts.length > 0 && <button type="button" className="btn btn-warning mt-3">Προϊόντα σε χαμηλό stock</button>}
            <ProductTable products={lowStockProducts} reduceQuantity={reduceQuantity} increaseQuantity={increaseQuantity}  name="low-stock-products"/>
            <Div className="input-group px-0 pb-3 mt-5">
               <input value={searchTerm} onChange={onSearchBarChange} type="text" className="form-control"
                      placeholder="Αναζήτηση προϊόντος"/>
            </Div>
            <ProductTable products={products} reduceQuantity={reduceQuantity} increaseQuantity={increaseQuantity} name="all-products"/>
         </Div>
      </Div>
   )
}