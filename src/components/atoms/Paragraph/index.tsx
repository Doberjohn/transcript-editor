import React from 'react';

export const Paragraph = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <p {...rest}>
         {children}
      </p>
   )
}