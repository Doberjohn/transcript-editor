import { createGlobalStyle } from 'styled-components';
import styles from './VOPlayer.module.css';
import {PageTemplate, Pause, Play, PlayerTemplate, Progress, Time, Title } from './components';
import { pauseBtn, playBtn } from './icons';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {useKeyPress} from "@johnfanidis/usekeypress";

interface VOPlayerProps {
  title: string;
  voiceoverUrl: string;
  setVOPosition: (time: number) => void;
  setIsPlaying: (status: boolean) => void;
  controlsEnabled?: boolean;
}

const keyboardConfig = {
  toggleVoiceoverStatus: 32,  // Space
  resetVoiceover: 36,         // Home
  moveBackward: 81,           // Q
  moveForward: 69,            // E
}

const colorScheme = `html{
    --playerBackground: #18191f;
    --titleColor: #ffffff;
    --timeColor: #ffffff;
    --progressSlider: #ff5500;
    --progressUsed: #ff5500;
    --progressLeft: #151616;
    --volumeSlider: #ff5500;
    --volumeUsed: #ff5500;
    --volumeLeft:  #151616;
  }`;

export const VOPlayer = ({
  voiceoverUrl,
  title,
  setIsPlaying,
  setVOPosition,
  controlsEnabled = false,
}: VOPlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [active, setActive] = useState(false);
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(1);
  const [end, setEnd] = useState(0);

  const pressedSpaceKey = useKeyPress(keyboardConfig.toggleVoiceoverStatus);
  const pressedHomeKey = useKeyPress(keyboardConfig.resetVoiceover);
  const pressedLeftArrowKey = useKeyPress(keyboardConfig.moveBackward);
  const pressedRightArrowKey = useKeyPress(keyboardConfig.moveForward);

  const GlobalStyles = createGlobalStyle`${colorScheme}`;

  useEffect(() => {
    const audio = new Audio(voiceoverUrl);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? parseFloat(((curTime * 100) / audio.duration).toFixed(1)) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);
    const setAudioEnd = () => setEnd((end) => end + 1);

    setAudio(audio);
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('volumechange', setAudioVolume);
    audio.addEventListener('ended', setAudioEnd);

    return () => {
      audio.pause();
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('volumechange', setAudioVolume);
      audio.removeEventListener('ended', setAudioEnd);
    };
  }, [voiceoverUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio) {
        setVOPosition(audio.currentTime * 1000)
      }
    }, 50)

    return () => {
      clearInterval(interval);
    }
  }, [setVOPosition, audio]);

  useEffect(() => {
    setIsPlaying(active);
  }, [setIsPlaying, active]);

  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [end]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
    // eslint-disable-next-line
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      audio.currentTime = Math.round((drag * audio.duration)) / 100;
    }
    // eslint-disable-next-line
  }, [drag]);

  useEffect(() => {
    if (controlsEnabled && pressedSpaceKey) {
      if (active) pause();
      else play();
    }
    // eslint-disable-next-line
  }, [audio, pressedSpaceKey]);

  useEffect(() => {
    if (controlsEnabled && audio && pressedHomeKey) {
      audio.currentTime = 0;
    }
  }, [audio, pressedHomeKey]);

  useEffect(() => {
    if (controlsEnabled && audio && pressedLeftArrowKey) {
      audio.currentTime = audio.currentTime - 2;
    }
  }, [audio, pressedLeftArrowKey]);

  useEffect(() => {
    if (controlsEnabled && audio && pressedRightArrowKey) {
      audio.currentTime = audio.currentTime + 2;
    }
  }, [audio, pressedRightArrowKey]);

  const play = () => {
    audio?.play();
    setActive(true);
  };

  const pause = () => {
    audio?.pause();
    setActive(false);
  };

  const reset = () => {
    pause();
    if (audio) audio.currentTime = 0;
  };

  const formatTimestamp = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

  return (
     <PageTemplate>
       <GlobalStyles />
       <PlayerTemplate>
         <div>
           {active ? (
              <Pause src={pauseBtn} onClick={pause} />
           ) : (
              <Play src={playBtn} onClick={play} />
           )}
         </div>
         <div className='w-100 ms-4 mb-3'>
           <div className={styles.title_time_wrapper}>
             <Title title={title} />
             <Time
                time={`${!time ? '0:00' : formatTimestamp(time)}/${
                   !length ? '0:00' : formatTimestamp(length)
                }`}
             />
           </div>

           <Progress
              value={slider}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSlider(parseFloat(e.target.value));
                setDrag(parseFloat(e.target.value));
              }}
           />
         </div>
       </PlayerTemplate>
     </PageTemplate>
  );
};
