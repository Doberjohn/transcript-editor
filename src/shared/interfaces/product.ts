import React from "react";

export interface IProduct extends React.HTMLAttributes<Element> {
   title: string;
   quantity: number;
}