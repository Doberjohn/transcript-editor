import React from "react";
import {IStoryCard} from "../../../shared/interfaces";
import {Div} from "../../atoms";
import {NavigationBar} from "../../molecules/NavigationBar/NavigationBar";
import {LatestStory, PreviousStories} from "../../organisms";

interface HomeTemplateProps {
   latestStory: IStoryCard;
   stories: IStoryCard[];
}

export const HomeTemplate = ({latestStory, stories}:HomeTemplateProps) => {
   return (
      <Div>
         <NavigationBar/>
         <Div className="container full-height">
            <Div className="row py-5">
               <Div className="col-lg-6 py-5 text-start">
                  <LatestStory
                     title={latestStory.title}
                     titleSize={latestStory.titleSize}
                     subtitle={latestStory.subtitle}
                     imageUrl={latestStory.imageUrl}
                     actionUrl={latestStory.actionUrl}
                     type="latest"/>
               </Div>
               <Div className="col-lg-6 py-lg-5 ps-lg-5 text-start">
                  <PreviousStories stories={stories}/>
               </Div>
            </Div>
         </Div>
      </Div>
   )
}