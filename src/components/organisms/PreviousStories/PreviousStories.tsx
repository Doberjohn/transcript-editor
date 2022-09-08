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
            {stories.map((story) => {
               return (
                  <Div className="col-6">
                     <StoryCard className="mt-4" title={story.title} subtitle={story.subtitle} imageUrl={story.imageUrl} titleSize={story.titleSize}/>
                  </Div>
               )
            })}
            {/*<Div className="col-6">*/}
            {/*   <StoryCard className="mt-4" title={''} imageUrl=""/>*/}
            {/*</Div>*/}
            {/*<Div className="col-6">*/}
            {/*   <StoryCard className="mt-4" title={'August | July 2022'} imageUrl=""/>*/}
            {/*</Div>*/}
            {/*<Div className="col-6">*/}
            {/*   <StoryCard className="mt-4" title={''} imageUrl="https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png"/>*/}
            {/*</Div>*/}
            {/*<Div className="col-6">*/}
            {/*   <StoryCard className="mt-4" title={''} imageUrl=""/>*/}
            {/*</Div>*/}
         </Div>
         <Div className="d-flex align-items-center justify-content-center">
            <button type="button" className="btn mt-3 btn-primary">Read more stories</button>
         </Div>
      </Div>
   )
}