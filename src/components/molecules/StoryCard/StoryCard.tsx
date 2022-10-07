import './StoryCard.css';
import React from "react";
import {Div, Span} from "../../atoms";
import {IStoryCard} from "../../../shared/interfaces";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";

export const StoryCard = ({title, subtitle, imageUrl, actionUrl, type, ...rest}: IStoryCard) => {
   const gaEventTracker = useAnalyticsEventTracker('Story');

   const trackOpenEvent = () => {
      gaEventTracker("Read on Medium", title);
   }

   return (
      <Div {...rest} style={{position: 'relative'}}>
         <a onClick={trackOpenEvent} className="text-decoration-none" href={actionUrl} target="_blank" rel="noreferrer">
            <img src={imageUrl} className="card-img-top" alt={title}/>
            <Div className={'small-card_title mb-0'}>
               <Div className={`${type === 'latest' ? 'h1 ms-3 mb-2' : 'h5'} mb-0`}>{title}</Div>
               {type === 'latest' && (
                  <Div className={'h4 ms-3'}>{subtitle}</Div>
               )}
            </Div>
         </a>
      </Div>
   )
}