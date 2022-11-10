import React from "react";

export interface IProduct extends React.HTMLAttributes<Element> {
   id: string;
   name: string;
   quantity: number;
   veryLowStockThreshold: number;
   lowStockThreshold: number;
}