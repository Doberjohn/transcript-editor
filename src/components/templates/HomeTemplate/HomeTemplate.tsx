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
         <Div id="homePageContainer" className="container full-height" style={{maxWidth: '1000px'}}>
            <Div className="row py-5">
               <Div className="col-lg-12 py-5 text-start">
                  <LatestStory
                     title={latestStory.title}
                     subtitle={latestStory.subtitle}
                     imageUrl={latestStory.imageUrl}
                     readLink={latestStory.readLink}
                     type="latest"/>
               </Div>
               <Div className="col-lg-12 py-lg-5 text-start">
                  <PreviousStories stories={stories}/>
               </Div>
            </Div>
         </Div>
      </Div>
   )
}