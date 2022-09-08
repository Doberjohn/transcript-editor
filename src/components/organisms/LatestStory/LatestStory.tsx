import React from "react";
import {Div, Span} from "../../atoms";
import {StoryCard} from "../../molecules";
import {IStoryCard} from "../../../shared/interfaces";

export const LatestStory = ({title, titleSize = 'h6', subtitle, imageUrl}: IStoryCard) => {
   return (
      <Div>
         <Span className="h2">Latest story</Span>
         <StoryCard
            className="mt-4"
            title={title}
            titleSize={titleSize}
            subtitle={subtitle}
            imageUrl={imageUrl}/>
      </Div>
   )
}