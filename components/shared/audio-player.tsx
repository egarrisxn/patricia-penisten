"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    YT: any; // The YouTube Iframe API object
    onYouTubeIframeAPIReady: () => void; // The callback function when the API is ready
  }
}

export default function CustomAudioPlayer() {
  const playerRef = useRef<any>(null);
  const youtubePlayerDivRef = useRef<HTMLDivElement>(null);

  const [isMuted, setIsMuted] = useState(true); // Start muted (autoplay-friendly)

  // Song: How Do I Say Goodbye by Dean Lewis
  const youtubeVideoId = "8zna5gSQ7xI";

  const createPlayer = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !window.YT ||
      !youtubePlayerDivRef.current ||
      playerRef.current
    ) {
      return;
    }

    playerRef.current = new window.YT.Player(youtubePlayerDivRef.current, {
      videoId: youtubeVideoId,
      playerVars: {
        autoplay: 1, // Autoplay (muted for browser policy)
        controls: 0, // Hide controls
        loop: 1, // Loop the video
        playlist: youtubeVideoId, // Required for single-video loop
        mute: 1, // Start muted so autoplay works
        enablejsapi: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: (event: any) => {
          console.log("YouTube Player is ready!");
          event.target.mute();
          event.target.playVideo();
          setIsMuted(true);
        },
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            // extra safety: loop manually if needed
            event.target.seekTo(0);
            event.target.playVideo();
          }
        },
        onError: (event: any) => {
          console.error("YouTube Player error:", event.data);
        },
      },
    });
  }, [youtubeVideoId]);

  // Load the YouTube Iframe API and create the player
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.YT) {
      // API already loaded by something else
      createPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    // Optional cleanup: avoid leaving stale global callbacks around
    return () => {
      if (window.onYouTubeIframeAPIReady) {
        window.onYouTubeIframeAPIReady = () => {};
      }
    };
  }, [createPlayer]);

  // Cleanup the player on unmount
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  // JUST MUTE/UNMUTE
  const handleToggleMute = () => {
    const player = playerRef.current;
    if (!player) return;

    if (isMuted) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  return (
    <div className="mx-auto w-22 xs:w-30 sm:rounded-lg sm:bg-card sm:p-0.5 sm:shadow-lg lg:w-34 sm:dark:border">
      <div className="flex items-center gap-1">
        <Button
          variant="basic"
          size="icon"
          onClick={handleToggleMute}
          className="m-0 size-7 p-0 text-accent-foreground xs:size-9"
        >
          {isMuted ? (
            <VolumeX className="size-5" />
          ) : (
            <Volume2 className="size-5" />
          )}
        </Button>
      </div>

      {/* Invisible YouTube iframe host */}
      <div
        ref={youtubePlayerDivRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          pointerEvents: "none",
          opacity: 0,
        }}
      />
    </div>
  );
}
