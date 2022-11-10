import React from 'react';
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import {TableRow} from "./TableRow";

const Table = ({children, ...rest}: React.HTMLAttributes<Element>) => {
   return (
      <table {...rest}>
         {children}
      </table>
   )
}

export {Table, TableBody, TableHeader, TableRow}