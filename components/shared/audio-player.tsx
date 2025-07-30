"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

declare global {
  interface Window {
    YT: any; // The YouTube Iframe API object
    onYouTubeIframeAPIReady: () => void; // The callback function when the API is ready
  }
}

export default function CustomAudioPlayer() {
  // useRef to hold the YouTube player instance
  const playerRef = useRef<any>(null);
  // useRef to hold the div element where the player will be inserted
  const youtubePlayerDivRef = useRef<HTMLDivElement>(null);

  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(true); // Start muted as per browser autoplay policies
  const [playerReady, setPlayerReady] = useState(false); // To track when the API is ready

  //! Song: How Do I Say Goodbye by Dean Lewis
  const youtubeVideoId = "https://www.youtube.com/watch?v=8zna5gSQ7xI".split(
    "v="
  )[1]; // Extract video ID

  // Function to load the YouTube Iframe API script
  useEffect(() => {
    if (typeof window !== "undefined" && !window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // This global function will be called by the YouTube API when it's ready
      window.onYouTubeIframeAPIReady = () => {
        setPlayerReady(true);
      };
    } else if (window.YT && !playerReady) {
      // If YT is already available (e.g., script loaded by another component), set ready
      setPlayerReady(true);
    }
  }, [playerReady]);

  // Function to create the YouTube player
  const createPlayer = useCallback(() => {
    if (playerReady && youtubePlayerDivRef.current && !playerRef.current) {
      playerRef.current = new window.YT.Player(youtubePlayerDivRef.current, {
        videoId: youtubeVideoId,
        playerVars: {
          autoplay: 1, // Autoplay (will be muted due to browser policy)
          controls: 0, // Hide controls
          loop: 1, // Loop the video
          playlist: youtubeVideoId, // Required for loop to work for a single video
          mute: 1, // Start muted to allow autoplay
          enablejsapi: 1, // Enable JS API control
          iv_load_policy: 3, // Hide video annotations
          modestbranding: 1, // Hide YouTube logo
          rel: 0, // Do not show related videos
        },
        events: {
          onReady: (event: any) => {
            console.log("YouTube Player is ready!");
            // Mute on ready, as autoplay requires it
            event.target.mute();
            setIsMuted(true);
            // Set initial volume
            event.target.setVolume(volume * 100); // YouTube API uses 0-100 for volume
          },
          onStateChange: (event: any) => {
            // YT.PlayerState.ENDED (0)
            if (event.data === window.YT.PlayerState.ENDED) {
              console.log("Song ended (looping)");
              // The `loop: 1` and `playlist: videoId` playerVars should handle looping automatically.
              // We don't need to manually setPlaying(false) or setIsMuted(true) here
              // unless we want specific behavior after each loop cycle.
            }
          },
          onError: (event: any) => {
            console.error("YouTube Player error:", event.data);
          },
        },
      });
    }
  }, [playerReady, youtubeVideoId, volume]);

  // Effect to create the player once the API is ready and the div is mounted
  useEffect(() => {
    createPlayer();
  }, [createPlayer]);

  // Handle volume change from the slider
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume * 100); // Convert 0-1 to 0-100
      if (newVolume === 0) {
        playerRef.current.mute();
        setIsMuted(true);
      } else {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  // Handle mute/unmute toggle button
  const handleToggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        if (volume === 0) {
          setVolume(0.8);
          playerRef.current.setVolume(80);
        }
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className='sm:dark:bg-card/50 xs:w-30 mx-auto w-22 sm:rounded-lg sm:bg-white sm:p-0.5 sm:shadow-sm'>
      <div className='flex items-center gap-1'>
        <Button
          variant='basic'
          size='icon'
          onClick={handleToggleMute}
          className='text-accent-foreground xs:size-9 m-0 size-7 p-0'
        >
          {isMuted || volume === 0 ? (
            <VolumeX className='size-5' />
          ) : (
            <Volume2 className='size-5' />
          )}
        </Button>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={[isMuted ? 0 : volume]}
          onValueChange={handleVolumeChange}
          className='xs:max-w-16 w-full max-w-14 flex-1'
        />
      </div>

      {/* This div will be replaced by the YouTube iframe */}
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

//! JUST MUTE/UNMUTE. NO SLIDER!

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { VolumeX, Volume2 } from "lucide-react";

// declare global {
//   interface Window {
//     YT: any; // The YouTube Iframe API object
//     onYouTubeIframeAPIReady: () => void; // The callback function when the API is ready
//   }
// }

// const Button = ({ children, onClick, className, variant }: any) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`rounded-lg p-2 ${className} ${
//         variant === "basic" ? "bg-gray-200 text-gray-800" : ""
//       }`}
//     >
//       {children}
//     </button>
//   );
// };

// export default function AdvancedPlayer() {
//   const playerDivRef = useRef<HTMLDivElement>(null); // Ref for the div element where the player will be embedded

//   const [videoId] = useState<string>("8zna5gSQ7xI"); // Video ID is static
//   const [player, setPlayer] = useState<any | null>(null); // Stores the YT.Player instance
//   const [apiReady, setApiReady] = useState(false); // Tracks if the YouTube API script has loaded
//   const [isMuted, setIsMuted] = useState(true); // Track mute state, starts muted as per requirement

//   // --- Step 1: Load the YouTube Iframe API script ---
//   useEffect(() => {
//     if (!window.YT) {
//       const tag = document.createElement("script");
//       // Correct YouTube Iframe API script URL
//       tag.src = "https://www.youtube.com/iframe_api";

//       const firstScriptTag = document.getElementsByTagName("script")[0];
//       if (firstScriptTag && firstScriptTag.parentNode) {
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//       } else {
//         document.body.appendChild(tag);
//       }

//       window.onYouTubeIframeAPIReady = () => {
//         setApiReady(true);
//         console.log("YouTube Iframe API is ready.");
//       };
//     } else {
//       setApiReady(true); // API was already loaded, set state immediately
//     }
//   }, []); // Empty dependency array means this runs once on mount

//   // --- Step 2: Initialize the YT.Player instance when API is ready and videoId is known ---
//   useEffect(() => {
//     // Only proceed if API is ready, we have a videoId, the div ref is available, and player isn't already created
//     if (apiReady && videoId && playerDivRef.current && !player) {
//       const newPlayer = new window.YT.Player(playerDivRef.current, {
//         videoId: videoId,
//         playerVars: {
//           autoplay: 1, // Autoplay set to 1
//           controls: 0, // No controls
//           loop: 1, // Enable looping
//           playlist: videoId, // For 'loop=1' with a single video, you must specify playlist as videoId
//           modestbranding: 1, // Modest branding
//           mute: 1, // Start muted
//         },
//         events: {
//           onReady: (event: any) => {
//             console.log("YouTube player is ready and attempting to play.");
//             event.target.playVideo(); // Attempt to play immediately on ready
//             event.target.mute(); // Ensure it's muted on ready
//             setIsMuted(true);
//           },
//           onError: (event: any) => {
//             console.error("YouTube Player Error:", event.data);
//           },
//           onStateChange: (event: any) => {
//             // This is crucial for looping a single video with loop=1
//             // If the video ends (state 0), play it again from the beginning
//             if (event.data === window.YT.PlayerState.ENDED) {
//               event.target.seekTo(0);
//               event.target.playVideo();
//             }
//           },
//         },
//       });
//       setPlayer(newPlayer); // Store the player instance in state
//     }
//   }, [apiReady, videoId, player]); // Re-run if these dependencies change

//   // --- Step 3: Handle mute/unmute toggle ---
//   const handleToggleMute = () => {
//     if (player) {
//       if (isMuted) {
//         player.unMute();
//       } else {
//         player.mute();
//       }
//       setIsMuted(!isMuted); // Toggle the mute state
//     }
//   };

//   // --- Step 4: Cleanup the player on component unmount ---
//   useEffect(() => {
//     return () => {
//       if (player) {
//         player.destroy(); // Destroy the player iframe to prevent memory leaks
//         setPlayer(null); // Clear the player instance
//       }
//     };
//   }, [player]); // Dependency on 'player' ensures cleanup runs when player instance changes or on unmount

//   // --- Render Logic ---
//   return (
//     <div>
//       {/* The invisible div for the YouTube player */}
//       <div
//         ref={playerDivRef}
//         style={{
//           width: "1px",
//           height: "1px",
//           overflow: "hidden",
//           position: "absolute",
//           left: "-9999px",
//           top: "-9999px",
//         }}
//       >
//         {/* The YouTube iframe will be dynamically inserted here by the API */}
//       </div>

//       {/* The mute/unmute button */}
//       <Button
//         className='size-8'
//         variant='basic'
//         size='icon'
//         onClick={handleToggleMute}
//       >
//         {isMuted ? (
//           <VolumeX className='size-5 sm:size-4' />
//         ) : (
//           <Volume2 className='size-5 sm:size-4' />
//         )}
//       </Button>
//     </div>
//   );
// }
