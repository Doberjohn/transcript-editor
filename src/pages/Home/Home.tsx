import React from "react";
import {IStoryCard} from "../../shared/interfaces";
import {HomeTemplate} from "../../components/templates";

const amazonS3bucket = 'https://studio-vn21.s3.eu-central-1.amazonaws.com';

const Home = () => {
   const stories: IStoryCard[] = [
      {
         title: 'What happens in the dark - Chapter 2',
         subtitle: 'Home, shitty home',
         imageUrl: `${amazonS3bucket}/short+stories/series/What+happens+in+the+dark+-+Chapter+2.webp`,
         readLink: 'https://blog.studiovn21.com/what-happens-in-the-dark-chapter-2-439d51f86983',
         type: 'latest',
      },
      {
         title: 'Would you be somebody else?',
         subtitle: 'Would you try it even for a day?',
         imageUrl: `${amazonS3bucket}/short+stories/microfiction/Would+you+be+somebody+else.webp`,
         readLink: 'https://blog.studiovn21.com/would-you-be-somebody-else-118e57ef95d3',
         type: 'previous',
      },
      {
         title: 'The spark of creativity',
         subtitle: 'Let imagination be your guide',
         imageUrl: `${amazonS3bucket}/short+stories/microfiction/The+spark+of+creativity.webp`,
         readLink: 'https://blog.studiovn21.com/a-spark-of-creativity-34d1ee7e461f',
         type: 'previous',
      },
      {
         title: 'What happens in the dark - Chapter 1',
         subtitle: 'Dangerous encounters',
         imageUrl: `${amazonS3bucket}/short+stories/series/What+happens+in+the+dark+-+Chapter+1.webp`,
         readLink: 'https://blog.studiovn21.com/what-happens-in-the-dark-d4c130361cf2',
         type: 'previous',
      },
      {
         title: 'Maybe she was lucky',
         subtitle: 'A flash fiction about a dark truth',
         imageUrl: `${amazonS3bucket}/short+stories/flash+fiction/Maybe+she+was+lucky.webp`,
         readLink: 'https://blog.studiovn21.com/maybe-she-was-lucky-7a07e2b0ff6f',
         type: 'previous',
      },
      {
         title: 'A guess in the reflection',
         subtitle: 'Can you face your true self?',
         imageUrl: `${amazonS3bucket}/short+stories/flash+fiction/A+guess+in+the+reflection.webp`,
         readLink: 'https://blog.studiovn21.com/auess-in-the-reflection-d5482a65b21f',
         type: 'previous',
      },
   ];

   return <HomeTemplate latestStory={stories[0]} stories={stories.slice(1, 6)}/>
}

export default Home;