import {Div} from "../../atoms";
import {ShortcutsTable} from "../../molecules";
import transcriptBtn from '../../../shared/icons/transcript.png';
import {useKeyPress} from "../../../hooks/useKeyPress";
import voiceoverBtn from '../../../shared/icons/voiceover.png';
import {VOPlayer} from "../../organisms/VOPlayer/VOPlayer";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import styles from './HomeTemplate.module.css';

interface ITranscript {
   timestamps: number[];
   words: string[];
}

const configuration = {
   keycodes: {
      openVoiceover: 86,      // V
      openTranscript: 66,     // B
      saveTranscript: 83,     // S
      toggleEditMode: 9,      // TAB
   }
}

export const HomeTemplate = () => {
   const [title, setTitle] = useState('');
   const [voPosition, setVOPosition] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isEditMode, setIsEditMode] = useState(false);
   const [selectedWord, setSelectedWord] = useState(0);
   const [voiceoverUrl, setVoiceoverUrl] = useState('');
   const [parsedTranscript, setParsedTranscript] = useState<ITranscript>({words: [], timestamps: []});

   const pressed_V_Key = useKeyPress(configuration.keycodes.openVoiceover, true);
   const pressed_B_Key = useKeyPress(configuration.keycodes.openTranscript, true);
   const pressed_S_Key = useKeyPress(configuration.keycodes.saveTranscript, true);
   const pressed_Tab_Key = useKeyPress(configuration.keycodes.toggleEditMode);

   const voiceoverInputRef = useRef<HTMLInputElement | null>(null);
   const transcriptInputRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      if (isPlaying) {
         const index = parsedTranscript.timestamps.find((ts) => ts >= voPosition) || 0;
         const word = parsedTranscript.timestamps.indexOf(index) || 0;
         setSelectedWord(word ? word : 0)
      }
      // eslint-disable-next-line
   }, [voPosition]);

   useEffect(() => {
      if (pressed_V_Key) {
         uploadVoiceoverFile();
      }
   }, [pressed_V_Key]);

   useEffect(() => {
      if (pressed_B_Key) {
         uploadTranscriptFile();
      }
   }, [pressed_B_Key]);

   useEffect(() => {
      if (pressed_S_Key) {
         saveTranscript();
      }
      // eslint-disable-next-line
   }, [pressed_S_Key]);

   useEffect(() => {
      if (pressed_Tab_Key) {
         setIsEditMode(!isEditMode);
      }
      // eslint-disable-next-line
   }, [pressed_Tab_Key]);

   const uploadVoiceoverFile = () => {
      if (voiceoverInputRef.current) {
         voiceoverInputRef.current.click();
      }
   };

   const uploadTranscriptFile = () => {
      if (transcriptInputRef.current) {
         transcriptInputRef.current.click();
      }
   };

   const saveTranscript = () => {
      const flattenTimestamps = parsedTranscript.timestamps.map((timestamp, index) => {
         return index === 0 ?
            timestamp :
            parsedTranscript.timestamps[index] - parsedTranscript.timestamps[index - 1]
      });

      let accumulator = parsedTranscript.timestamps[0];

      const correctedTimestamps = [
         ...[parsedTranscript.timestamps[0]],
         ...flattenTimestamps.map((elem) => {
         return accumulator = accumulator + elem;
      }).slice(0, flattenTimestamps.length - 1)];

      const fileToSave = {
         createdAt: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
         createdBy: 'StudioVN21 transcript editor',
         words: parsedTranscript.words.map((word, index) => {
            return {
               word,
               endTime: (correctedTimestamps[index] / 1000).toFixed(1) + 's'
            }
         })
      }
      downloadFile(fileToSave, 'editor');
      downloadFile(parsedTranscript.timestamps, 'parse');
   }

   const downloadFile = (file: any, nameExtension: string) => {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
         JSON.stringify(file)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = `${title.substring(0, title.length - 4)}_${nameExtension}.json`;

      link.click();
   };

   const onVoiceoverFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const fileObj = event.target.files && event.target.files[0];
      if (!fileObj) {
         return;
      }

      event.target.value = '';
      setTitle(fileObj.name);
      setVoiceoverUrl(URL.createObjectURL(fileObj));
   };

   const onTranscriptFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const fileObj = event.target.files && event.target.files[0];
      if (!fileObj) return;

      const reader = new FileReader();
      reader.onload = (onTranscriptLoad);

      event.target.value = '';
      reader.readAsText(fileObj);
   };

   const onTranscriptLoad = (e: ProgressEvent<FileReader>) => {
      const resultJSON = JSON.parse(e.target?.result as string);
      const origin = resultJSON.createdBy === 'StudioVN21 transcript editor' ? 'editor' : 'googleAPI'
      if (origin === 'googleAPI') {
         resultJSON.results[0].alternatives[0].words =
            [
               ...resultJSON.results[0].alternatives[0].words,
               {word: 'END', endTime: resultJSON.results[0].resultEndTime}
            ];
      }
      const transcript = origin === 'editor' ? resultJSON : resultJSON.results[0].alternatives[0];
      const parsedTranscript: ITranscript = {words: [], timestamps: []};
      for (let index=0; index < transcript.words.length; index++) {
         parsedTranscript.words = [...parsedTranscript.words, transcript.words[index].word];

         const previous = index < transcript.words.length - 1 ? 0 : parseFloat(transcript.words[index - 1].endTime
            .substring(0, transcript.words[index - 1].endTime.indexOf('s'))) * 1000;
         const current = parseFloat(transcript.words[index].endTime
            .substring(0, transcript.words[index].endTime.indexOf('s'))) * 1000;
         const next = index < transcript.words.length - 1 ? parseFloat(transcript.words[index + 1].endTime
            .substring(0, transcript.words[index + 1].endTime.indexOf('s'))) * 1000 : 0;

         parsedTranscript.timestamps = [
            ...parsedTranscript.timestamps,
            index < transcript.words.length - 1 ? next - current: current - previous
         ];
      }
      const updatedTimestamps = parsedTranscript.timestamps.map((elem, index) => {
         return parseInt(parsedTranscript.timestamps
            .slice(0, index + 1)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            .toFixed(0));
      });

      setParsedTranscript({...parsedTranscript, timestamps: updatedTimestamps});
   }

   const onTimestampEdit = (event: ChangeEvent<HTMLInputElement>, index: number) => {
      const updatedTranscript = {...parsedTranscript};
      if (updatedTranscript.timestamps) {
         updatedTranscript.timestamps[index] = parseInt(event.target.value) * 100
      }
      setParsedTranscript(updatedTranscript as ITranscript);
   }

   return (
      <Div className='container pt-5'>
         <ShortcutsTable/>
         <div className='d-flex justify-content-evenly mt-5'>
            <div className={`${styles.actionBoxContainer}`} onClick={uploadVoiceoverFile}>
               Click to upload voiceover
               <img width={100} src={voiceoverBtn} alt='voiceover'/>
               or press Ctrl + V
            </div>
            <div className={`${styles.actionBoxContainer}`} onClick={uploadTranscriptFile}>
               Click to upload transcript
               <img width={100} src={transcriptBtn} alt='voiceover'/>
               or press Ctrl + B
            </div>
         </div>
         <input
            style={{display: 'none'}}
            ref={voiceoverInputRef}
            type="file"
            accept="audio/*"
            onChange={onVoiceoverFileChange}
         />
         <input
            style={{display: 'none'}}
            ref={transcriptInputRef}
            type="file"
            accept="application/JSON"
            onChange={onTranscriptFileChange}
         />

         {title && (
            <div className='mt-5'>
               <VOPlayer
                  title={title.substring(0, title.length - 4)}
                  voiceoverUrl={voiceoverUrl}
                  setIsPlaying={setIsPlaying}
                  setVOPosition={setVOPosition}/>
            </div>
         )}

         <div className='mt-5'>
            {parsedTranscript && parsedTranscript.words.map((word, index) => {
               return (
                  <span>
                     {index < parsedTranscript.words.length - 1 && (
                        <span key={word + index} className='d-inline-block p-1' style={{
                           marginRight: (parsedTranscript.timestamps[index] -
                              parsedTranscript.timestamps[index - 1]) / 100,
                           border: `3px solid ${isPlaying && selectedWord === index ? '#ff5500' : 'transparent'}`
                        }}>{word}
                           {isEditMode && (
                              <input
                                 value={parsedTranscript.timestamps[index] / 100}
                                 className='ms-2'
                                 style={{width: 50}}
                                 onChange={(e) => onTimestampEdit(e, index)}/>
                           )}
                        </span>
                     )}
                  </span>
               )
            })}
         </div>
      </Div>
   )
}