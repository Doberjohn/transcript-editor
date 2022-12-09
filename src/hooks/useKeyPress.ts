import {useEffect, useState} from "react";

export const useKeyPress = (targetKey: number, ctrlRequired = false) => {
   const [keyPressed, setKeyPressed] = useState<boolean>(false);

   function downHandler(e: KeyboardEvent) {
      if (e.ctrlKey) e.preventDefault();
      if (e.keyCode === targetKey) {
         if (!ctrlRequired || (ctrlRequired && e.ctrlKey)) setKeyPressed(true);
      }
   }

   const upHandler = ({ keyCode }: {keyCode: number}) => {
      if (keyCode === targetKey) {
         setKeyPressed(false);
      }
   };

   useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
         window.removeEventListener("keydown", downHandler);
         window.removeEventListener("keyup", upHandler);
      };
      // eslint-disable-next-line
   }, []);
   return keyPressed;
}