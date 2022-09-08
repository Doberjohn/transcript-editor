import React from "react";
import {IStoryCard} from "../../shared/interfaces";
import {HomeTemplate} from "../../components/templates/HomeTemplate/HomeTemplate";

export const Home = () => {
   const latestStory: IStoryCard = {
      title: 'A guess in the reflection',
      titleSize: 'h4',
      subtitle: 'Adam plays a dark and twisted game with his mirror reflection every night. This night, things are going to be different...',
      imageUrl: 'https://miro.medium.com/max/2400/1*axxgA1hRaRaqAzPoeS3_6A.png',
      actionUrl: 'https://medium.com/the-interactive-storytelling/auess-in-the-reflection-d5482a65b21f',
   }
   const stories: IStoryCard[] = [
      {
         title: 'Newsletter | August 2022',
         imageUrl: 'https://miro.medium.com/max/700/1*kCN8nEMENjY7e8RBPvxUbA.png',
         actionUrl: 'https://medium.com/the-interactive-storytelling/studio-vn21-newsletter-august-2022-9fe02a773061',
      },
      {
         title: 'Newsletter | July 2022',
         imageUrl: 'https://miro.medium.com/max/700/1*FWCu_rCUqvU8K1wIogzgvg.jpeg',
         actionUrl: 'https://medium.com/the-interactive-storytelling/studio-vn21-newsletter-july-2022-116c2e3cfa14',
      },
      {
         title: 'Comic | The Storm',
         imageUrl: 'https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png',
         actionUrl: 'https://ko-fi.com/s/b7280cea07',
      },
      {
         title: 'Visual Story | The Storm',
         imageUrl: 'https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png',
         actionUrl: 'https://www.youtube.com/watch?v=BNXrS9r-g5M',
      }
   ];

   return <HomeTemplate latestStory={latestStory} stories={stories}/>
}