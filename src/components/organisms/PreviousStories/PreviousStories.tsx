import React from "react";
import {Div, Span} from "../../atoms";
import {StoryCard} from "../../molecules";
import {IStoryCard} from "../../../shared/interfaces";

interface PreviousStoriesProps {
   stories: IStoryCard[]
}

export const PreviousStories = ({stories}: PreviousStoriesProps) => {
   return (
      <Div>
         <Span className="h2">Previous stories</Span>
         <Div className="row">
            {stories.map((story, index) => {
               return (
                  <Div key={`previous-story-${index}`} className="col-md-6">
                     <StoryCard
                        className="mt-4"
                        title={story.title}
                        titleSize={story.titleSize}
                        subtitle={story.subtitle}
                        imageUrl={story.imageUrl}
                        actionUrl={story.actionUrl}
                        type="previous"/>
                  </Div>
               )
            })}
         </Div>
         {/*<Div className="d-flex align-items-center justify-content-center">*/}
         {/*   <button type="button" className="btn mt-4 btn-primary">Read more stories</button>*/}
         {/*</Div>*/}
      </Div>
   )
}