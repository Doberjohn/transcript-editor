import { createGlobalStyle } from 'styled-components';
import {PageTemplate, Pause, Play, PlayerTemplate } from './components';
import { pauseBtn, playBtn } from './icons';
import React, {useEffect, useRef, useState} from 'react';
import {useKeyPress} from "@johnfanidis/usekeypress";
import WaveSurfer from "wavesurfer.js";

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

export const VOEditor = ({
  voiceoverUrl,
  setIsPlaying,
  setVOPosition,
  controlsEnabled = false,
}: VOPlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [active, setActive] = useState(false);
  const [seek, setSeek] = useState(0);
  const [end, setEnd] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer>();

  const pressedSpaceKey = useKeyPress(keyboardConfig.toggleVoiceoverStatus);
  const pressedHomeKey = useKeyPress(keyboardConfig.resetVoiceover);
  const pressedQKey = useKeyPress(keyboardConfig.moveBackward);
  const pressedEKey = useKeyPress(keyboardConfig.moveForward);

  const GlobalStyles = createGlobalStyle`${colorScheme}`;

  useEffect(() => {
    const audio = new Audio(voiceoverUrl);

    const setAudioEnd = () => setEnd((end) => end + 1);

    setAudio(audio);
    audio.addEventListener('ended', setAudioEnd);

    const waveSurfer = WaveSurfer.create({
      container: containerRef.current as HTMLDivElement,
      responsive: true,
      barWidth: 1,
      barHeight: 2,
      cursorWidth: 0,
      height: 100,
    });

    waveSurfer.toggleMute();
    waveSurfer.load(audio);

    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
    });

    waveSurfer.on('seek', (newPosition) => {
      setSeek(newPosition * audio.duration);
    });

    return () => {
      audio.pause();
      audio.removeEventListener('ended', setAudioEnd);

      waveSurfer.destroy();
    };
  }, [voiceoverUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio) {
        setVOPosition(audio.currentTime * 1000)
      }
    }, 50);

    return () => {
      clearInterval(interval);
    }
  }, [setVOPosition, audio]);

  useEffect(() => {
    setIsPlaying(active);
    waveSurferRef.current?.playPause();
  }, [setIsPlaying, active]);

  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [end]);

  useEffect(() => {
    if (audio != null) {
      audio.currentTime = seek;
    }
    // eslint-disable-next-line
  }, [seek]);

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

  /** Editor only features **/
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
      waveSurferRef.current?.seekTo(0);
    }
  }, [audio, pressedHomeKey]);

  useEffect(() => {
    if (controlsEnabled && audio && pressedQKey) {
      audio.currentTime = audio.currentTime - 1;
      waveSurferRef.current?.seekTo(
         waveSurferRef.current?.getCurrentTime() / audio.duration - 0.1
      );
    }
  }, [audio, pressedQKey]);

  useEffect(() => {
    if (controlsEnabled && audio && pressedEKey) {
      audio.currentTime = audio.currentTime + 1;
      waveSurferRef.current?.seekTo(
         waveSurferRef.current?.getCurrentTime() / audio.duration + 0.1
      );
    }
  }, [audio, pressedEKey]);

  /** End of editor only features **/

  return (
     <PageTemplate>
       <GlobalStyles />
       <PlayerTemplate>
         <div>
           {active ?
              <Pause src={pauseBtn} onClick={pause} />:
              <Play src={playBtn} onClick={play} />}
         </div>
         <div className='w-100 ms-4'>
           <div ref={containerRef} />
         </div>
       </PlayerTemplate>
     </PageTemplate>
  );
};
