import React from 'react';

export const Span = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <span {...rest}>
         {children}
      </span>
   )
}