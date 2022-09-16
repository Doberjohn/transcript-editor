import './StoryCard.css';
import React from "react";
import {Div, Paragraph, Span} from "../../atoms";
import {IStoryCard} from "../../../shared/interfaces";

export const StoryCard = ({title, titleSize = 'h6', subtitle, imageUrl, actionUrl, type, ...rest}: IStoryCard) => {
   const isPreviousCard = type === 'previous';

   return (
      <Div {...rest}>
         <a className="card text-decoration-none" href={actionUrl} target="_blank" rel="noreferrer">
            <img src={imageUrl} className={`card-img-top ${isPreviousCard ? 'previous-card' : ''}`} alt={title}/>
            <Div className="card-body">
               <Span className={`${titleSize} card-title`}>{title}</Span>
               {subtitle && (
                  <Paragraph className="card-text my-3">{subtitle}</Paragraph>
               )}
            </Div>
         </a>
      </Div>
   )
}