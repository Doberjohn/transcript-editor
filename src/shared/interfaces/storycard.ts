import React from "react";

export interface IStoryCard extends React.HTMLAttributes<Element> {
   title: string;
   titleSize?: string;
   subtitle?: string;
   imageUrl: string;
}