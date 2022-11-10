import React from 'react';

export const TableBody = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <tbody {...rest}>
         {children}
      </tbody>
   )
}