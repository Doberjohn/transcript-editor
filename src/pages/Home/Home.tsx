import React from "react";
import {IStoryCard} from "../../shared/interfaces";
import {HomeTemplate} from "../../components/templates/HomeTemplate/HomeTemplate";

export const Home = () => {
   const latestStory: IStoryCard = {
      title: 'A guess in the reflection',
      titleSize:'h4',
      subtitle:"Adam plays a dark and twisted game with his mirror reflection every night. This night, things are going to be different...",
      imageUrl:"https://miro.medium.com/max/2400/1*axxgA1hRaRaqAzPoeS3_6A.png",
   }
   const stories: IStoryCard[] = [
      {
         title: 'Newsletter | July 2022',
         imageUrl: 'https://miro.medium.com/max/700/1*FWCu_rCUqvU8K1wIogzgvg.jpeg',
      },
      {
         title: 'Newsletter | August 2022',
         imageUrl: 'https://miro.medium.com/max/700/1*kCN8nEMENjY7e8RBPvxUbA.png',
      },
      {
         title: 'Comic | The Storm',
         imageUrl: 'https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png',
      },
      {
         title: 'Visual Story | The Storm',
         imageUrl: 'https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png',
      }
   ];

   return <HomeTemplate latestStory={latestStory} stories={stories}/>
}