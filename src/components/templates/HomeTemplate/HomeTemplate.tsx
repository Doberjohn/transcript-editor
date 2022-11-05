import React, {useState} from "react";
import {Div} from "../../atoms";
import {IProduct} from "../../../shared/interfaces";
import {MinusCircleIcon, PlusCircleIcon} from "../../../shared/svgs";


interface HomeTemplateProps {
   products: IProduct[];
}

export const HomeTemplate = ({products}: HomeTemplateProps) => {
   const [filteredProducts, setFilteredProducts] = useState(products);

   console.log(filteredProducts)

   const reduceQuantity = (product: IProduct) => {
      product.quantity = product.quantity - 1;
      setFilteredProducts([...filteredProducts])
   }

   const increaseQuantity = (product: IProduct) => {
      product.quantity = product.quantity + 1;
      setFilteredProducts([...filteredProducts])
   }

   return (
      <Div className="container" style={{maxWidth: '1000px'}}>
         <Div className="row py-5">
            <table className="table table-dark table-hover">
               <thead>
               <tr>
                  <th scope="col">Όνομα Προϊόντος</th>
                  <th className="text-center" scope="col">Ποσότητα</th>
               </tr>
               </thead>
               <tbody>
               {filteredProducts.map((product) => {
                  return (
                     <tr key={product.title}>
                        <th scope="row">{product.title}</th>
                        <th scope="row">
                           <Div className="d-flex align-items-center justify-content-center">
                              <MinusCircleIcon onClick={() => reduceQuantity(product)}/>
                              <Div className="ms-2 me-2">
                                 {product.quantity}
                              </Div>
                              <PlusCircleIcon onClick={() => increaseQuantity(product)}/>
                           </Div>
                        </th>
                     </tr>
                  )
               })}
               </tbody>
            </table>
         </Div>
      </Div>
   )
}