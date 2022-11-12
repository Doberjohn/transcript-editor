import React, {ChangeEvent, useEffect, useState} from "react";
import {Div} from "../../atoms";
import {IProduct} from "../../../shared/interfaces";
import {ProductTable} from "../../organisms";

interface HomeTemplateProps {
   backendProducts: IProduct[];
   updateProducts: Function;
}

export const HomeTemplate = ({backendProducts, updateProducts}: HomeTemplateProps) => {
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
         <Div className="row py-5 px-3">
            {veryLowStockProducts.length > 0 && <button type="button" className="btn btn-danger">Προϊόντα σε πολύ χαμηλό stock</button>}
            <ProductTable products={veryLowStockProducts} name="very-low-products" updateProducts={updateProducts}/>
            {lowStockProducts.length > 0 && <button type="button" className="btn btn-warning mt-3">Προϊόντα σε χαμηλό stock</button>}
            <ProductTable products={lowStockProducts} name="low-stock-products" updateProducts={updateProducts}/>
            <Div className="input-group px-0 pb-3 mt-5">
               <input value={searchTerm} onChange={onSearchBarChange} type="text" className="form-control"
                      placeholder="Αναζήτηση προϊόντος"/>
            </Div>
            <ProductTable products={products} name="all-products" updateProducts={updateProducts}/>
         </Div>
      </Div>
   )
}