import './StoryCard.css';
import React from "react";
import {Div, Paragraph, Span} from "../../atoms";
import {IStoryCard} from "../../../shared/interfaces";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";

export const StoryCard = ({title, titleSize = 'h6', subtitle, imageUrl, actionUrl, type, ...rest}: IStoryCard) => {
   const gaEventTracker = useAnalyticsEventTracker('Story');

   const trackOpenEvent = () => {
      gaEventTracker("Read on Medium", title);
   }

   return (
      <Div {...rest}>
         <a onClick={trackOpenEvent} className="card text-decoration-none" href={actionUrl} target="_blank" rel="noreferrer">
            <img src={imageUrl} className="card-img-top" alt={title}/>
            <Div className="card-body">
               <Span className={`${titleSize} card-title`}>{title}</Span>
               {type === 'latest' && subtitle && (
                  <Paragraph className="card-text my-3">{subtitle}</Paragraph>
               )}
            </Div>
         </a>
      </Div>
   )
}