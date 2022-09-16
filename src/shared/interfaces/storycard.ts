import React from "react";

export interface IStoryCard extends React.HTMLAttributes<Element> {
   title: string;
   imageUrl: string;
   actionUrl: string;
   titleSize?: string;
   subtitle?: string;
   type: "latest" | "previous";
}