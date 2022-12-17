import React from "react";
import styled from "styled-components";

export const ShortcutsTable = () => {
   return (
      <ShortcutsTableWrapper className={`d-flex flex-column position-absolute border`}>
         <div className='width-100 border-bottom'>
            <span className='ps-1'>Shortcuts</span>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Upload voiceover</div>
            <div>(Ctrl + V)</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Upload transcript</div>
            <div>(Ctrl + B)</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Save transcript</div>
            <div>(Ctrl + S)</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Toggle voiceover</div>
            <div>Spacebar</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Reset voiceover</div>
            <div>Home</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Toggle edit mode</div>
            <div>Tab</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>-2 seconds</div>
            <div>Q</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>+2 seconds</div>
            <div>E</div>
         </div>
      </ShortcutsTableWrapper>
   )
}

const ShortcutsTableWrapper = styled.div`
  top: 0;
  left: 0;
  width: 220px;
  height: 220px;
`