import { useState, useEffect } from 'react';

export const usePlatform = () => {
   const [platform, setPlatform] = useState('desktop');

   const updateMedia = () => {
      let platform = 'mobile';

      if (window.innerWidth > 1450) {
         platform = 'desktop';
      } else if (window.innerWidth > 600) {
         platform = 'tablet';
      }

      setPlatform(platform);
   };

   useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
   });

   return platform;
}