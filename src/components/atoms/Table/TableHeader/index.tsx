import React from 'react';

export const TableHeader = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <th {...rest}>
         {children}
      </th>
   )
}