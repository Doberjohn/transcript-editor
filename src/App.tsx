import React from 'react';
import {Div, Span} from "./components/atoms";
import {StoryCard} from "./components/molecules";
import './App.css';

function App() {
   return (
      <Div className="app">
         <Div className="container">
            <Div className="row">
               <Div className="col p-5 text-start">
                  <Span className="h2">Latest story</Span>
                  <StoryCard
                     className="mt-4"
                     title={'A guess in the reflection'}
                     titleSize='h4'
                     subtitle="Adam plays a dark and twisted game with his mirror reflection every night. This night, things are going to be different..."
                     imageUrl="https://miro.medium.com/max/2400/1*axxgA1hRaRaqAzPoeS3_6A.png"/>
               </Div>
               <Div className="col p-5 text-start">
                  <Span className="h2">Previous stories</Span>
                  <Div className="row">
                     <Div className="col-6">
                        <StoryCard className="mt-4" title={'Newsletter | July 2022'} imageUrl="https://miro.medium.com/max/700/1*FWCu_rCUqvU8K1wIogzgvg.jpeg"/>
                     </Div>
                     <Div className="col-6">
                        <StoryCard className="mt-4" title={'August | July 2022'} imageUrl="https://miro.medium.com/max/700/1*kCN8nEMENjY7e8RBPvxUbA.png"/>
                     </Div>
                     <Div className="col-6">
                        <StoryCard className="mt-4" title={'Comic | The Storm'} imageUrl="https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png"/>
                     </Div>
                     <Div className="col-6">
                        <StoryCard className="mt-4" title={'Visual Story | The Storm'} imageUrl="https://storage.ko-fi.com/cdn/useruploads/display/3561fc86-0690-4932-9f81-44fb5647b478_comicshoplaunchday.png"/>
                     </Div>
                  </Div>
                  <Div className="d-flex align-items-center justify-content-center">
                     <button type="button" className="btn btn-primary">Read more stories</button>
                  </Div>
               </Div>
            </Div>
         </Div>
      </Div>
   );
}

export default App;
