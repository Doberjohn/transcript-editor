import React from 'react';

interface ImageProps {
   src: string;
   alternativeText: string;
   [x:string]: any;
}

export const Image = ({src, alternativeText, ...rest}: ImageProps) => {
   return (
      <img src={src} {...rest} alt={alternativeText}/>
   )
}