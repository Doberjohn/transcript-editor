import React from "react";
import {IProduct} from "../../../shared/interfaces";
import {Div, Table, TableBody, TableHeader, TableRow} from "../../atoms";
import {MinusCircleIcon, PlusCircleIcon} from "../../molecules";

interface IProductTable {
   name: string,
   products: IProduct[],
   reduceQuantity: Function,
   increaseQuantity: Function,
   showIcons?: boolean,
}

export const ProductTable = ({name, products, reduceQuantity, increaseQuantity, showIcons = true}: IProductTable) => {
   return (
      <Table className="table table-dark table-hover table-bordered">
         <TableBody>
            {products.map((product) => {
               return (
                  <TableRow key={`${name}-${product.name}`}>
                     <TableHeader>{product.name}</TableHeader>
                     <TableHeader>
                        <Div className="d-flex align-items-center justify-content-center">
                           {showIcons && <MinusCircleIcon onClick={() => reduceQuantity(product)}/>}
                           <Div className="ms-2 me-2">
                              {product.quantity}
                           </Div>
                           {showIcons && <PlusCircleIcon onClick={() => increaseQuantity(product)}/>}
                        </Div>
                     </TableHeader>
                  </TableRow>
               )
            })}
         </TableBody>
      </Table>
   )
}