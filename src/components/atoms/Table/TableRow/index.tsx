import React from 'react';

export const TableRow = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <tr {...rest}>
         {children}
      </tr>
   )
}