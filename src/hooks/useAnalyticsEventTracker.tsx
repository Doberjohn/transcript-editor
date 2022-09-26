import React from "react";
import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category: string) => {
   const eventTracker = (action: string, label: string) => {
      ReactGA.event({category, action, label});
   }
   return eventTracker;
}
export default useAnalyticsEventTracker;