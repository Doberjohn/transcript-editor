import React, {useEffect, useState} from "react";
import {IProduct} from "../../../shared/interfaces";
import {Div, Table, TableBody, TableHeader, TableRow} from "../../atoms";
import {MinusCircleIcon, PlusCircleIcon} from "../../molecules";
import {usePlatform} from "../../../hooks/usePlatform";

interface IProductTable {
   name: string,
   products: IProduct[],
   updateProducts: Function,
}

interface IQuantityCell {
   product: IProduct,
   updateProducts: Function,
}

const ProductQuantityCell = ({product, updateProducts}: IQuantityCell) => {
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
         updateProducts(product, value);
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

export const ProductTable = ({name, products, updateProducts}: IProductTable) => {
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
                        <ProductQuantityCell product={product} updateProducts={updateProducts}/>
                     </TableHeader>
                  </TableRow>
               )
            })}
         </TableBody>
      </Table>
   )
}