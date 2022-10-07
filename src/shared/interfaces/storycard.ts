import React from "react";

export interface IStoryCard extends React.HTMLAttributes<Element> {
   title: string;
   subtitle: string;
   imageUrl: string;
   actionUrl: string;
   type: "latest" | "previous";
}