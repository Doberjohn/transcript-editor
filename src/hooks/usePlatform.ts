import { useState, useEffect } from 'react';

const calculatePlatform = () => {
   let platform = 'mobile';

   if (window.innerWidth > 1450) {
      platform = 'desktop';
   } else if (window.innerWidth > 600) {
      platform = 'tablet';
   }

   return platform;
}

export const usePlatform = () => {
   const [platform, setPlatform] = useState(calculatePlatform);

   const updateMedia = () => {
      setPlatform(calculatePlatform);
   };

   useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
   });

   return platform;
}