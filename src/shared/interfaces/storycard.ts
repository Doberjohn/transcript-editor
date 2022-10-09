import React from "react";

export interface IStoryCard extends React.HTMLAttributes<Element> {
   title: string;
   subtitle: string;
   imageUrl: string;
   readLink: string;
   type: "latest" | "previous";
}