import React, {useEffect, useRef} from "react";
import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
   audioUrl: string;
   isPlaying: boolean;
   setSeek: (newPosition: number) => void
}

export const Waveform = ({audioUrl, isPlaying, setSeek}: WaveformProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const waveSurferRef = useRef<WaveSurfer>();

   useEffect(() => {
      waveSurferRef.current?.playPause();
   }, [isPlaying]);

   useEffect(() => {
      const waveSurfer = WaveSurfer.create({
         container: containerRef.current as HTMLDivElement,
         responsive: true,
         barWidth: 1,
         barHeight: 2,
         cursorWidth: 0,
         height: 100,
      });

      waveSurfer.toggleMute();
      waveSurfer.load(audioUrl);

      waveSurfer.on('ready', () => {
         waveSurferRef.current = waveSurfer;
      });

      waveSurfer.on('seek', (newPosition) => {
         setSeek(newPosition * waveSurfer.getDuration());
      });

      return () => {
         waveSurfer.destroy();
      };

   }, [audioUrl]);

   return (
      <div ref={containerRef} />
   )
}