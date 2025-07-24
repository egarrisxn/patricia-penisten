"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Volume2, VolumeX } from "lucide-react"; // { Pause, Play }

// Dynamically importing ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function AudioPlayer() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(true);

  //! Song: How Do I Say Goodbye by Dean Lewis
  const youtubeUrl = "https://www.youtube.com/watch?v=8zna5gSQ7xI";

  // const handlePlayPause = () => {
  //   setPlaying(!playing);
  //   if (!playing && isMuted && volume > 0) setIsMuted(false);
  // };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted && !playing) setPlaying(true);
  };

  return (
    <div className='sm:dark:bg-card mx-auto w-29 p-0.5 sm:rounded-lg sm:bg-white sm:shadow-sm'>
      <div className='flex items-center gap-1 sm:gap-1'>
        {/* <Button variant='outline' size='icon' onClick={handlePlayPause}>
          {playing ? <Pause className='size-4' /> : <Play className='size-4' />}
        </Button> */}
        <Button
          className='size-8'
          variant='basic'
          size='icon'
          onClick={handleToggleMute}
        >
          {isMuted ? (
            <VolumeX className='size-5 sm:size-4' />
          ) : (
            <Volume2 className='size-5 sm:size-4' />
          )}
        </Button>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={[isMuted ? 0 : volume]}
          onValueChange={handleVolumeChange}
          className='w-full max-w-16 flex-1'
        />
        {/* <span className='text-muted-foreground w-12 text-right text-sm'>
          {isMuted ? "Muted" : `${Math.round(volume * 100)}%`}
        </span> */}
      </div>

      {/* Hidden ReactPlayer instance */}
      <ReactPlayer
        ref={playerRef}
        src={youtubeUrl}
        playing={playing}
        volume={isMuted ? 0 : volume}
        muted={isMuted}
        loop={true}
        controls={false}
        width='0'
        height='0'
        style={{ display: "none" }}
        onPlay={() => console.log("Song is playing")}
        onPause={() => console.log("Song is paused")}
        onEnded={() => {
          console.log("Song ended");
          setPlaying(false);
          setIsMuted(true);
        }}
        onError={(e) => console.error("ReactPlayer error:", e)}
      />
    </div>
  );
}
