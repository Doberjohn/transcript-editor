import React from "react";
import {IStoryCard} from "../../shared/interfaces";
import {HomeTemplate} from "../../components/templates/HomeTemplate/HomeTemplate";

export const Home = () => {
   const stories: IStoryCard[] = [
      {
         title: 'Maybe she was lucky',
         titleSize: 'h4',
         subtitle: 'A woman tries desperately to satisfy her husband. Is she going to make it? Is she going to be lucky?',
         imageUrl: 'https://miro.medium.com/max/700/1*qLx2RbkS1bltPUSpvrDoqA.png',
         actionUrl: 'https://blog.studiovn21.com/maybe-she-was-lucky-7a07e2b0ff6f',
         type: 'latest',
      },
      {
         title: 'A guess in the reflection',
         imageUrl: 'https://miro.medium.com/max/700/1*axxgA1hRaRaqAzPoeS3_6A.png',
         actionUrl: 'https://blog.studiovn21.com/auess-in-the-reflection-d5482a65b21f',
         type: 'previous',
      },
      {
         title: 'Newsletter | August 2022',
         imageUrl: 'https://miro.medium.com/max/700/1*kCN8nEMENjY7e8RBPvxUbA.png',
         actionUrl: 'https://medium.com/the-interactive-storytelling/studio-vn21-newsletter-august-2022-9fe02a773061',
         type: 'previous',
      },
      {
         title: 'Newsletter | July 2022',
         imageUrl: 'https://miro.medium.com/max/700/1*FWCu_rCUqvU8K1wIogzgvg.jpeg',
         actionUrl: 'https://medium.com/the-interactive-storytelling/studio-vn21-newsletter-july-2022-116c2e3cfa14',
         type: 'previous',
      },
      {
         title: 'Comic | The Storm',
         imageUrl: 'https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png',
         actionUrl: 'https://ko-fi.com/s/b7280cea07',
         type: 'previous',
      },
      {
         title: 'Visual Story | The Storm',
         imageUrl: 'https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png',
         actionUrl: 'https://www.youtube.com/watch?v=BNXrS9r-g5M',
         type: 'previous',
      }
   ];

   const homePageStories = stories.slice(0, 5);

   return <HomeTemplate latestStory={homePageStories[0]} stories={homePageStories.slice(1)}/>
}