import React from "react";
import styles from './ShortcutsTable.module.css';

export const ShortcutsTable = () => {
   return (
      <div className={`d-flex flex-column position-absolute border ${styles.shortcutsTableContainer}`}>
         <div className='width-100 border-bottom'>
            <span className='ps-1'>Shortcuts</span>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Ctrl + V</div>
            <div>Upload voiceover</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Ctrl + B</div>
            <div>Upload transcript</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Ctrl + S</div>
            <div>Save transcript</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Tab</div>
            <div>Toggle edit mode</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Spacebar</div>
            <div>Toggle voiceover</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Home</div>
            <div>Reset voiceover</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>Q</div>
            <div>-2 seconds</div>
         </div>
         <div className='d-flex px-1 justify-content-between'>
            <div>E</div>
            <div>+2 seconds</div>
         </div>
      </div>
   )
}