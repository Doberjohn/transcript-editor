import React, {useEffect, useState} from "react";
import {IProduct} from "../../../shared/interfaces";
import {Div, Table, TableBody, TableHeader, TableRow} from "../../atoms";
import {MinusCircleIcon, PlusCircleIcon} from "../../molecules";
import {usePlatform} from "../../../hooks/usePlatform";

interface IProductTable {
   name: string,
   products: IProduct[],
   updateQuantity: Function,
}

interface IQuantityCell {
   product: IProduct,
   updateQuantity: Function,
}

const ProductQuantityCell = ({product, updateQuantity}: IQuantityCell) => {
   const [value, setValue] = useState(product.quantity);

   const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let parsedValue = 0;

      if (e.target.value !== '') {
         parsedValue = parseInt(e.target.value)
      }

      if (parsedValue !== value) {
         setValue(parsedValue);
      }
   }

   const onQuantityBlur = () => {
      if (value !== product.quantity) {
         updateQuantity(product, value);
      }
   }

   const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => e.target.select();

   return (
      <Div className="d-flex align-items-center">
         <input
            type="number"
            className="form-control text-center"
            value={value}
            onChange={onQuantityChange}
            onBlur={onQuantityBlur}
            onFocus={(e) => handleFocus(e)}/>
      </Div>
   )
}

export const ProductTable = ({name, products, updateQuantity}: IProductTable) => {
   const platform = usePlatform();
   const quantityCellStyle = platform === 'mobile' ? {width: '20vw'} : {width: '10vw'}

   return (
      <Table className="table table-dark table-hover table-bordered">
         <TableBody>
            {products.map((product) => {
               return (
                  <TableRow key={`${name}-${product.name}`}>
                     <TableHeader>
                        <Div className="d-flex align-items-center">
                           {product.name}
                        </Div>
                     </TableHeader>
                     <TableHeader style={quantityCellStyle}>
                        <ProductQuantityCell product={product} updateQuantity={updateQuantity}/>
                     </TableHeader>
                  </TableRow>
               )
            })}
         </TableBody>
      </Table>
   )
}