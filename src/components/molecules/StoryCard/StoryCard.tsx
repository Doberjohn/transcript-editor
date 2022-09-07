import React from "react";
import {Div, Paragraph, Span} from "../../atoms";
import './StoryCard.css';

interface StoryCardProps extends React.HTMLAttributes<Element> {
   title: string;
   titleSize?: string;
   subtitle?: string;
   imageUrl: string;
}

export const StoryCard = ({title, titleSize = 'h6', subtitle, imageUrl, ...rest}: StoryCardProps) => {
   return (
      <Div {...rest}>
         <Div className="card">
            <img src={imageUrl} className="card-img-top" alt={title}/>
            <Div className="card-body">
               <Span className={`${titleSize} card-title`}>{title}</Span>
               {subtitle && (
                  <Paragraph className="card-text my-3">{subtitle}</Paragraph>
               )}
            </Div>
         </Div>
      </Div>
   )
}