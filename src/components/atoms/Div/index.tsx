import React from 'react';

export const Div = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <div {...rest}>
         {children}
      </div>
   )
}